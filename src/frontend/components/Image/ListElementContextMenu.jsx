import React from 'react';
import { ContextMenu, MenuItem } from 'react-contextmenu';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const ListElementContextMenu = (props) => {
    const { contextMenuId, fetchListData } = props;
    const { t, i18n } = useTranslation('imageList');

    /*
     * TODO: add confirmation modal
     */
    function handleDelete(event, data) {
        axios.delete(`/image/${data.id}`)
            .then((r) => {
                if (r.data.result === 1) {
                    fetchListData();
                }
            })
    }

    function handleEdit(event, data) {

    }

    return (
        <div>
            <ContextMenu id={contextMenuId} hideOnLeave={true}>
                <MenuItem onClick={handleDelete}>
                    { t('contextMenu.menuItem.delete') }
                </MenuItem>
                <MenuItem onClick={handleEdit}>
                    { t('contextMenu.menuItem.edit') }
                </MenuItem>
            </ContextMenu>
        </div>
    );
};

export default ListElementContextMenu;
