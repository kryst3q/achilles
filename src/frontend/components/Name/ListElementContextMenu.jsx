import React from 'react';
import { ContextMenu, MenuItem } from 'react-contextmenu';
import { useTranslation } from 'react-i18next';

const ListElementContextMenu = (props) => {
    const {
        contextMenuId,
        deleteElement,
        editElement,
        updateElement
    } = props;
    const { t, i18n } = useTranslation('nameList');

    function onNameDelete(event, data) {
        deleteElement(data.index);
    }

    function onNameEdit(event, data) {
        editElement(data.index);
    }

    function onNameUpdate(event, data) {
        updateElement(data.index);
    }

    return (
        <div>
            <ContextMenu id={contextMenuId} hideOnLeave={true}>
                <MenuItem onClick={onNameDelete}>
                    { t('contextMenu.menuItem.deleteName') }
                </MenuItem>
                <MenuItem onClick={onNameEdit}>
                    { t('contextMenu.menuItem.editName') }
                </MenuItem>
                <MenuItem onClick={onNameUpdate}>
                    { t('contextMenu.menuItem.updateName') }
                </MenuItem>
            </ContextMenu>
        </div>
    );
};

export default ListElementContextMenu;
