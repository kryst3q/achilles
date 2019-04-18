import React from 'react';
import { ContextMenu, MenuItem } from 'react-contextmenu';
import { useTranslation } from 'react-i18next';

const ComparisionElementContextMenu = (props) => {
    const { contextMenuId, toCompare, toCompareStateRefresh } = props;
    const { t, i18n } = useTranslation('outfitList');

    function handleRemoveFromCompare(event, data) {
        // TODO creata file/class to store consts with eg. localStorage keys
        const items = JSON.parse(localStorage.getItem('toCompare'));

        localStorage.setItem(
            'toCompare',
            JSON.stringify(items.filter(item => item.id !== data.id && item.model === 'Outfit'))
        );

        let newValues = toCompare.filter(element => element.id !== data.id);
        toCompareStateRefresh(newValues);
    }

    return (
        <div>
            <ContextMenu id={contextMenuId} hideOnLeave={true}>
                <MenuItem onClick={handleRemoveFromCompare}>
                    { t('contextMenu.menuItem.removeFromCompare') }
                </MenuItem>
            </ContextMenu>
        </div>
    );
};

export default ComparisionElementContextMenu;
