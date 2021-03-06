import React from 'react';
import { ContextMenu, MenuItem } from 'react-contextmenu';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const ListElementContextMenu = (props) => {
    const { contextMenuId } = props;
    const { t, i18n } = useTranslation('outfitList');

    function handleAddToCompare(event, data) {
        let toCompare = localStorage.getItem('toCompare');

        if (null === toCompare) {
            toCompare = [];
        } else {
            toCompare = JSON.parse(toCompare);

            if (!toCompare.some((element, index, array) => element.id === data.id && element.model === 'Outfit')) {
                toCompare.push({id: data.id, model: 'Outfit'});
            }
        }

        localStorage.setItem('toCompare', JSON.stringify(toCompare));
    }

    function handleRemoveFromCompare(event, data) {
        let toCompare = localStorage.getItem('toCompare');

        if (null === toCompare) {
            return;
        } else {
            toCompare = JSON.parse(toCompare);
        }

        if (toCompare.some((element, index, array) => element.id === data.id && element.model === 'Outfit')) {
            localStorage.setItem(
                'toCompare',
                JSON.stringify(toCompare.filter(element => element.id !== data.id && element.model === 'Outfit'))
            );
        }
    }

    /*
     * TODO: add confirmation modal
     */
    function handleDeleteOutfit(event, data) {
        /*
         * TODO: add confirmation/failure info return
         */
        axios.delete(`/outfit/${data.id}`);
    }

    return (
        <div>
            <ContextMenu id={contextMenuId} hideOnLeave={true}>
                <MenuItem onClick={handleAddToCompare}>
                    { t('contextMenu.menuItem.addToCompare') }
                </MenuItem>
                <MenuItem onClick={handleRemoveFromCompare}>
                    { t('contextMenu.menuItem.removeFromCompare') }
                </MenuItem>
                <MenuItem onClick={handleDeleteOutfit}>
                    { t('contextMenu.menuItem.deleteOutfit') }
                </MenuItem>
            </ContextMenu>
        </div>
    );
};

export default ListElementContextMenu;
