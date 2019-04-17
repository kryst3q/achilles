import React, { Component } from 'react';
import axios from 'axios';
import { getI18n, withTranslation } from 'react-i18next';
import { ContextMenuTrigger } from 'react-contextmenu';
import ContextMenu from './ComparisionElementContextMenu';
import Sortable from 'react-sortablejs';
import ComparisionElement from './ComparisionElement';

class Comparision extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toCompare: []
        };

        this.toCompareStateRefresh = this.toCompareStateRefresh.bind(this);
    }

    componentWillMount() {
        this.fetchDataToCompare();
    }

    fetchDataToCompare() {
        let toCompare = localStorage.getItem('toCompare');

        if (null === toCompare) {
            return;
        }

        toCompare = JSON.parse(toCompare);

        let items = [];

        for (let i = 0; i < toCompare.length; i++) {
            items.push(axios
                .get(
                    /*
                     * TODO handle getting LanguageId
                     */
                    `/${toCompare[i].model.toLowerCase()}/${toCompare[i].id}?LanguageId=` + '129',
                    /*
                     * TODO handle strange situation where outfit lists only images because all outfits data are in pl and not in en
                     */
                    // `/${element.model.toLowerCase()}/${element.id}?LanguageId=` + '38',
                    {
                        headers: { 'Accept-Language': getI18n().language }
                    }
                ).then(res => res.data)
            );
        }

        axios.all(items).then(values => this.setState({
            toCompare: values
        }));
    }

    prepareComparisionElements(contextMenuId) {
        return this.state.toCompare.map((element, index) => (
            <div key={index}>
                <ContextMenuTrigger
                    id={contextMenuId}
                    collect={() => element}
                >
                    <ComparisionElement
                        key={element.Images[0].File.id}
                        src={element.Images[0].File.hash}
                    />
                </ContextMenuTrigger>
            </div>
        ));
    }

    toCompareStateRefresh() {
        this.fetchDataToCompare();
    }

    render() {
        const { t } = this.props;
        const contextMenuId = 'comparisionElementContextMenu';
        const comparisionElements = this.prepareComparisionElements(contextMenuId);

        return (
            <div>
                {
                    0 < this.state.toCompare.length
                        ?
                        <div>
                            <Sortable>
                                {comparisionElements}
                            </Sortable>
                            <ContextMenu
                                toCompareStateRefresh={this.toCompareStateRefresh}
                                contextMenuId={contextMenuId}
                            />
                        </div>
                        :
                        <span>Nic</span>
                }
            </div>
        );
    }
}

export default withTranslation('outfitList')(Comparision);
