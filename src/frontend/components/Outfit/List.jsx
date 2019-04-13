import React, { Component } from 'react';
import axios from 'axios';
import {getI18n, withTranslation} from 'react-i18next';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import ListElement from './ListElement.jsx';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };

        this.handleAddToCompare = this.handleAddToCompare.bind(this);
        this.handleRemoveFromCompare = this.handleRemoveFromCompare.bind(this);
    }

    componentDidMount() {
        axios
            .get(
                /*
                 * TODO handle getting LanguageId
                 */
                '/outfit/list?LanguageId=' + '129',
                /*
                 * TODO handle strange situation where outfit lists only images because all outfits data are in pl and not in en
                 */
                // '/outfit/list?LanguageId=' + '38',
                {
                    headers: { 'Accept-Language': getI18n().language }
                }
            )
            .then(res => {
                this.setState({
                    list: res.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleAddToCompare(event, data) {
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

    handleRemoveFromCompare(event, data) {
        let toCompare = localStorage.getItem('toCompare');

        if (null === toCompare) {
            return;
        } else {
            toCompare = JSON.parse(toCompare);
        }

        if (toCompare.some((element, index, array) => element.id === data.id && element.model === 'Outfit')) {
            localStorage.setItem('toCompare', JSON.stringify(toCompare.filter(element => element.id !== data.id && element.model === 'Outfit')));
        }
    }

    render() {
        const { t } = this.props;
        let list  = this.state.list;

        return (
            <div>
                <div>
                    {
                        0 < list.length
                            ?
                            list.map(element => (
                                    <ContextMenuTrigger
                                        id={'context-menu'}
                                        collect={() => element}
                                    >
                                        <ListElement
                                            key={element.id.toString()}
                                            src={element.Images[0].File.hash}
                                            names={element.Names}
                                        />
                                    </ContextMenuTrigger>
                            ))
                            :
                            <span>{ t('outfitList:noRecords') }</span>
                    }
                </div>
                <div>
                    <ContextMenu
                        id={'context-menu'}
                        hideOnLeave={true}
                    >
                        <MenuItem onClick={this.handleAddToCompare}>
                            Dodaj do porównania
                        </MenuItem>
                        <MenuItem onClick={this.handleRemoveFromCompare}>
                            Usuń z porównywania
                        </MenuItem>
                    </ContextMenu>
                </div>
            </div>
        );
    }
}

export default withTranslation('outfitList')(List);
