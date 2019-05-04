import React from 'react';
import { ContextMenu, MenuItem } from 'react-contextmenu';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const ListElementContextMenu = (props) => {
    const { contextMenuId, fetchListData } = props;
    const { t, i18n } = useTranslation('nameList');

    function onNameDelete(event, data) {
        axios.delete(`/name/${data.id}`)
            .then((r) => fetchListData())
            .catch((e) => console.log(e));
    }

    return (
        <div>
            <ContextMenu id={contextMenuId} hideOnLeave={true}>
                <MenuItem onClick={onNameDelete}>
                    { t('contextMenu.menuItem.deleteName') }
                </MenuItem>
            </ContextMenu>
        </div>
    );
};

export default ListElementContextMenu;
