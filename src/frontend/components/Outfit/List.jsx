import React, { Component } from 'react';
import axios from 'axios';
import {getI18n, withTranslation} from 'react-i18next';
import { ContextMenuTrigger } from 'react-contextmenu';
import ContextMenu from './ListElementContextMenu';
import ListElement from './ListElement';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
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

    prepareListElements(contextMenuId) {
        return this.state.list.map((element, index) => (
            <div key={index}>
                <ContextMenuTrigger
                    id={contextMenuId}
                    collect={() => element}
                >
                    <ListElement
                        key={element.id.toString()}
                        src={element.Images[0].File.hash}
                        names={element.Names}
                    />
                </ContextMenuTrigger>
            </div>
        ));
    }

    prepareNoRecordsElement(t) {
        return <span>{ t('outfitList:noRecords') }</span>;
    }

    render() {
        const { t } = this.props;
        const contextMenuId = 'outfitListElementContextMenu';
        const listElements = this.prepareListElements(contextMenuId);
        const noRecordsElement = this.prepareNoRecordsElement(t);

        return (
            <div>
                {0 < this.state.list.length ? listElements : noRecordsElement}
                <ContextMenu contextMenuId={contextMenuId} />
            </div>
        );
    }
}

export default withTranslation('outfitList')(List);
