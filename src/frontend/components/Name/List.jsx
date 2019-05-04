import React, { Component } from 'react';
import axios from 'axios';
import { withTranslation } from 'react-i18next';
import { ContextMenuTrigger } from 'react-contextmenu';
import ContextMenu from './ListElementContextMenu';
import { formatToSearchValue } from '../Helpers';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };

        this.makeElementEditable = this.makeElementEditable.bind(this);
        this.fetchListData = this.fetchListData.bind(this);
        this.handleElementChange = this.handleElementChange.bind(this);
        this.handleElementDelete = this.handleElementDelete.bind(this);
        this.handleElementUpdate = this.handleElementUpdate.bind(this);
    }

    componentDidMount() {
        this.fetchListData();
    }

    fetchListData() {
        axios
            .get(`/name/list?LanguageId=129`)
            .then(res => {
                this.setState({
                    list: res.data.map(d => {
                        d.readOnly = true;
                        d.modified = false;

                        return d;
                    })
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    makeElementEditable(event) {
        const index = Number(event.target.previousElementSibling.dataset.index);
        let list = this.state.list;

        if (list[index].readOnly) {
            list[index].readOnly = false;

            this.setState({
                list: list
            });
        } 
    }

    handleElementChange(event) {
        const index = Number(event.target.dataset.index);
        const newDisplayValue = event.target.value;
        let list = this.state.list;

        list[index].displayValue = newDisplayValue;
        list[index].modified = true;
        list[index].searchValue = formatToSearchValue(newDisplayValue);

        this.setState({
            list: list
        });
    }

    handleElementDelete(event) {
        console.log(event);
        // const element = event.target.previousElementSibling.previousElementSibling;
        // const id = element.dataset.id;
        // const index = Number(element.dataset.index);
        // let list = this.state.list;
        //
        // axios.delete('/name/' + id)
        //     .then((r) => {
        //         if (r.data.result === 1) {
        //             list.splice(index, 1);
        //
        //             this.setState({
        //                 list: list
        //             });
        //         }
        //     })
        //     .catch((e) => console.log(e));
    }

    handleElementUpdate(event) {
        const index = Number(event.target.previousElementSibling.dataset.index);
        let list = this.state.list;
        const element = list[index];

        axios.put(`/name/${element.id}`, element)
            .then((r) => {
                list[index].modified = false;
                list[index].readOnly = true;

                this.setState({
                    list: list
                });
            })
            .catch((e) => console.log(e));
    }

    prepareListElements(contextMenuId) {
        let list = this.state.list;

        return list.map((element, index) => (
            <div key={index}>
                <ContextMenuTrigger
                    id={contextMenuId}
                    collect={() => element}
                >
                    <input
                        type='text'
                        readOnly={element.readOnly}
                        value={element.displayValue}
                        data-id={element.id}
                        data-index={index}
                        onChange={this.handleElementChange}
                        onDoubleClick={this.makeElementEditable}
                    />
                    {
                        !element.readOnly && element.modified
                            ?
                            <button onClick={this.handleElementUpdate}>zapisz</button>
                            :
                            ''
                    }
                </ContextMenuTrigger>
            </div>
        ));
    }

    prepareNoRecordsElement(t) {
        return <span>{ t('nameList:noRecords') }</span>;
    }

    render() {
        const { t } = this.props;
        const contextMenuId = 'nameListElementContextMenu';
        const listElements = this.prepareListElements(contextMenuId);
        const noRecordsElement = this.prepareNoRecordsElement(t);

        return (
            <div>
                {0 < this.state.list.length ? listElements : noRecordsElement}
                <ContextMenu
                    contextMenuId={contextMenuId}
                    fetchListData={this.fetchListData}
                />
            </div>
        );
    }
}

export default withTranslation('nameList')(List);
