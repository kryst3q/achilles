import React, { Component } from 'react';
import axios from 'axios';
import { getI18n } from 'react-i18next';
import ListElement from './ListElement.jsx';

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
                '/outfit/list?LanguageId=' + '129',
                {
                    headers: { 'Accept-Language': getI18n().language }
                }
            )
            .then(res => {
                console.log(res.data);
                this.setState({
                    list: res.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                {this.state.list.map(element => (
                    <ListElement
                        key={element.id.toString()}
                        outfit={element}
                    />
                ))}
            </div>
        );
    }
}

export default List;
