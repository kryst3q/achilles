import React from 'react';
import { ContextMenu, MenuItem } from 'react-contextmenu';
import { useTranslation } from 'react-i18next';

const ListElementContextMenu = (props) => {
    const { contextMenuId } = props;
    const { t, i18n } = useTranslation('noteList');



    return (
        <div>
            <ContextMenu id={contextMenuId} hideOnLeave={true}>

            </ContextMenu>
        </div>
    );
};

export default ListElementContextMenu;
