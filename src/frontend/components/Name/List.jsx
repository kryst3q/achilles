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

        this.elementReadToggle = this.elementReadToggle.bind(this);
        this.fetchListData = this.fetchListData.bind(this);
        this.handleElementChange = this.handleElementChange.bind(this);
        this.handleUpdateElement = this.handleUpdateElement.bind(this);
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

    elementReadToggle(event) {
        const index = Number(event.target.previousElementSibling.dataset.index);
        let list = this.state.list;

        list[index].readOnly = !list[index].readOnly;

        this.setState({
            list: list
        });
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

    handleUpdateElement(event) {
        const index = Number(event.target.previousElementSibling.dataset.index);
        let list = this.state.list;
        const element = list[index];

        axios.put('/name/' + element.id, element)
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
                    />
                    {
                        element.readOnly ?
                            <button onClick={this.elementReadToggle}>edytuj</button>
                            :
                            <button onClick={this.handleUpdateElement}>zapisz</button>
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
