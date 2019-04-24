import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            .get('/note/list')
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
                {/*<ContextMenuTrigger*/}
                    {/*id={contextMenuId}*/}
                    {/*collect={() => element}*/}
                {/*>*/}
                    <Link to={`/note/${element.id}`}>
                        <ListElement
                            key={element.id.toString()}
                            title={element.title}
                            content={element.content}
                        />
                    </Link>
                {/*</ContextMenuTrigger>*/}
            </div>
        ));
    }

    prepareNoRecordsElement(t) {
        return <span>{ t('noteList:noRecords') }</span>;
    }

    render() {
        const { t } = this.props;
        const contextMenuId = 'noteListElementContextMenu';
        const listElements = this.prepareListElements(contextMenuId);
        const noRecordsElement = this.prepareNoRecordsElement(t);

        return (
            <div>
                {0 < this.state.list.length ? listElements : noRecordsElement}
                {/*<ContextMenu contextMenuId={contextMenuId} />*/}
            </div>
        );
    }
}

export default withTranslation('noteList')(List);
