import React from 'react';
import { ContextMenu, MenuItem } from 'react-contextmenu';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const ListElementContextMenu = (props) => {
    const { contextMenuId, fetchListData, elementReadToggle } = props;
    const { t, i18n } = useTranslation('nameList');

    /*
     * TODO: add confirmation modal
     */
    function handleDeleteElement(event, data) {
        axios.delete(`/name/${data.id}`);
        /*
         * TODO: make all context menus rerender their parent components!
         */
        fetchListData();
    }

    // function handleEditElement(event, data) {
    //     elementReadToggle(data.id);
    // }

    return (
        <div>
            <ContextMenu id={contextMenuId} hideOnLeave={true}>
                {/*<MenuItem onClick={handleEditElement}>*/}
                    {/*{ t('contextMenu.menuItem.editName') }*/}
                {/*</MenuItem>*/}
                <MenuItem onClick={handleDeleteElement}>
                    { t('contextMenu.menuItem.deleteName') }
                </MenuItem>
            </ContextMenu>
        </div>
    );
};

export default ListElementContextMenu;
