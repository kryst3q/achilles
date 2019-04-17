import React from 'react';
import { ContextMenu, MenuItem } from 'react-contextmenu';
import { useTranslation } from 'react-i18next';

const ComparisionElementContextMenu = (props) => {
    const { contextMenuId, toCompareStateRefresh } = props;
    const { t, i18n } = useTranslation('outfitList');

    function handleRemoveFromCompare(event, data) {
        // TODO creata file/class to store consts with eg. localStorage keys
        const toCompare = JSON.parse(localStorage.getItem('toCompare'));

        localStorage.setItem(
            'toCompare',
            JSON.stringify(toCompare.filter(element => element.id !== data.id && element.model === 'Outfit'))
        );

        toCompareStateRefresh();
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
