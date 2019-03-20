import React, { Component } from 'react';
import { DateTimePicker, Multiselect } from 'react-widgets';
import axios from 'axios';
import { withTranslation } from 'react-i18next';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: [],
            datingStart: new Date(),
            datingEnd: new Date(),
            description: '',
            foundNames: [],
            isSubmitting: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleNameCreate = this.handleNameCreate.bind(this);
        this.handleNameSearch = this.handleNameSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount() {
    //     axios.get('/language/list').then(response => {
    //         this.setState({
    //             foundNames: response.data
    //         });
    //     });
    // }

    handleInputChange(event) {
        console.log(event);

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleNameCreate(name) {
        let names = this.state.names;
        let foundNames = this.state.foundNames;
        let newOption = {
            id: names.length,
            name: name
        };

        this.setState({
            names: [...names, newOption],
            foundNames: [...foundNames, newOption]
        })
    }

    handleNameSearch(name) {
        axios.get('/language/search', {
            params: {
                term: name
            }
        })
            .then(response => {
                this.setState({
                    foundNames: response.data
                });
            })
            .catch();
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(event, this.state);
    }

    render() {
        const { t } = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='names'>{ t('outfitForm:name.label') }</label>
                    <Multiselect
                        id='names'
                        name='names'
                        valueField='id'
                        textField='name'
                        data={this.state.foundNames}
                        defaultValue={this.state.names}
                        allowCreate='onFilter'
                        onSearch={this.handleNameSearch}
                        onCreate={this.handleNameCreate}
                        onChange={(value) => this.handleInputChange({
                            target: {
                                type: 'select',
                                name: 'names',
                                value: value
                            }
                        })}
                    />
                </div>
                <div>
                    <div>
                        <label htmlFor='datingStart'>{ t('outfitForm:dating.start.label') }</label>
                        <DateTimePicker
                            id='datingStart'
                            name='datingStart'
                            min={new Date(966, 0, 1)}
                            max={new  Date()}
                            format='Y'
                            date={true}
                            time={false}
                            views={['decade', 'century']}
                            defaultValue={this.state.datingStart}
                            onChange={(value) => this.handleInputChange({
                                target: {
                                    type: 'datetime',
                                    name: 'datingStart',
                                    value: value
                                }
                            })}
                        />
                    </div>
                    <div>
                        <label htmlFor='datingEnd'>{ t('outfitForm:dating.end.label') }</label>
                        <DateTimePicker
                            id='datingEnd'
                            name='datingEnd'
                            min={new Date(966, 0, 1)}
                            max={new  Date()}
                            format='Y'
                            date={true}
                            time={false}
                            views={['decade', 'century']}
                            defaultValue={this.state.datingEnd}
                            onChange={(value) => this.handleInputChange({
                                target: {
                                    type: 'datetime',
                                    name: 'datingEnd',
                                    value: value
                                }
                            })}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor='description'>{ t('outfitForm:description.label') }</label>
                    <input
                        type='text'
                        name='description'
                        value={this.state.description}
                        onChange={this.handleInputChange}
                    />
                </div>
                <button type='submit' disabled={this.state.isSubmitting}>
                    { t('outfitForm:submit.label') }
                </button>
            </form>
        );
    }
}

export default withTranslation('outfitForm')(Form);
