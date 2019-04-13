import React, { Component } from 'react';
import axios from 'axios';
import {getI18n, withTranslation} from 'react-i18next';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';

class Comparision extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toCompare: []
        };
    }

    componentDidMount() {
        let toCompare = localStorage.getItem('toCompare');

        if (null === toCompare) {
            return;
        }

        toCompare = JSON.parse(toCompare);

        toCompare.map(element => {
            axios
                .get(
                    /*
                     * TODO handle getting LanguageId
                     */
                    `/${element.model.toLowerCase()}/${element.id}?LanguageId=` + '129',
                    /*
                     * TODO handle strange situation where outfit lists only images because all outfits data are in pl and not in en
                     */
                    // `/${element.model.toLowerCase()}/${element.id}?LanguageId=` + '38',
                    {
                        headers: { 'Accept-Language': getI18n().language }
                    }
                )
                .then(res => {
                    let toCompare = this.state.toCompare;

                    this.setState({
                        toCompare: toCompare.push(res.data)
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        });
    }

    render() {
        const { t } = this.props;
        const toCompare = this.state.toCompare;

        return (
            <div>
                {
                    0 < toCompare.length
                        ?
                        toCompare.map(element => <img src={`uploads/${element.Images[0].File.hash}`}/>)
                        :
                        <span>Nic</span>
                }
            </div>
        );
    }
}

export default withTranslation('outfitList')(Comparision);
