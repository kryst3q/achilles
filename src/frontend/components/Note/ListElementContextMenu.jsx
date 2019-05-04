import React from 'react';
import { ContextMenu, MenuItem } from 'react-contextmenu';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const ListElementContextMenu = (props) => {
    const { contextMenuId, updateState } = props;
    const { t, i18n } = useTranslation('noteList');

    /*
     * TODO: add confirmation modal
     */
    function handleDeleteNote(event, data) {
        axios.delete(`/note/${data.id}`)
            .then((r) => {
                if (r.data.result === 1) {
                    updateState();
                }
            })
    }

    return (
        <div>
            <ContextMenu id={contextMenuId} hideOnLeave={true}>
                <MenuItem onClick={handleDeleteNote}>
                    { t('contextMenu.menuItem.deleteNote') }
                </MenuItem>
            </ContextMenu>
        </div>
    );
};

export default ListElementContextMenu;
