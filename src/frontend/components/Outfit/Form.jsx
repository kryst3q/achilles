import React, { Component } from 'react';
import { DateTimePicker, Multiselect } from 'react-widgets';
import axios from 'axios';
import { withTranslation } from 'react-i18next';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: [],
            datingStart: '',
            datingEnd: '',
            description: '',
            selectedNames: []
        };

        this.handleNameCreate = this.handleNameCreate.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleNameSearch = this.handleNameSearch.bind(this);
        this.handleDatingStartChange = this.handleDatingStartChange.bind(this);
        this.handleDatingEndChange = this.handleDatingEndChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('/language/list').then(response => {
            this.setState({
                names: response.data
            });
        });
    }

    handleNameChange(selectedNames) {
        this.setState({
            selectedNames: selectedNames
        })
    }

    handleNameCreate(name) {
        let names = this.state.names;
        let selectedNames = this.state.selectedNames;
        let newOption = {
            id: names.length,
            name: name
        };

        this.setState({
            names: [...names, newOption],
            selectedNames: [...selectedNames, newOption]
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleNameSearch(name) {

    }

    handleDatingStartChange(start) {

    }

    handleDatingEndChange(start) {

    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        const {t} = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='names'>{ t('name.label') }</label>
                    <Multiselect
                        id='names'
                        valueField='id'
                        textField='name'
                        data={this.state.names}
                        value={this.state.selectedNames}
                        allowCreate='onFilter'
                        onSearch={this.handleNameSearch}
                        onCreate={this.handleNameCreate}
                        onChange={this.handleNameChange}
                    />
                </div>
                <div>
                    <div>
                        <label htmlFor='datingStart'>{ t('dating.start.label') }</label>
                        <DateTimePicker
                            id='datingStart'
                            min={new Date(966, 0, 1)}
                            max={new  Date()}
                            format='Y'
                            date={true}
                            time={false}
                            views={['decade', 'century']}
                            onChange={this.handleDatingStartChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='datingEnd'>{ t('dating.end.label') }</label>
                        <DateTimePicker
                            id='datingEnd'
                            min={new Date(966, 0, 1)}
                            max={new  Date()}
                            format='Y'
                            date={true}
                            time={false}
                            views={['decade', 'century']}
                            onChange={this.handleDatingEndChange}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor='description'>{ t('description.label') }</label>
                    <input
                        id='description'
                        type='text'
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                </div>
                <button type='submit'>
                    { t('submit.label') }
                </button>
            </form>
        );
    }
}

export default withTranslation('outfitForm')(Form);
