import React, { Component } from 'react';
import { Form as RBForm, Button, Col } from 'react-bootstrap';
import { DateTimePicker, Multiselect } from 'react-widgets';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: [
                { id: 'chocolate', name: 'Chocolate' },
                { id: 'strawberry', name: 'Strawberry' },
                { id: 'vanilla', name: 'Vanilla' }
            ],
            description: '',
            selectedNames: []
        };

        this.handleNameCreate = this.handleNameCreate.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleNameSearch = this.handleNameSearch.bind(this);
        this.handlePeriodStartChange = this.handlePeriodStartChange.bind(this);
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

    handlePeriodStartChange(start) {

    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <RBForm onSubmit={this.handleSubmit}>
                <RBForm.Group controlId="names">
                    <RBForm.Label>Nazwy</RBForm.Label>
                    <Multiselect
                        valueField="id"
                        textField="name"
                        data={this.state.names}
                        value={this.state.selectedNames}
                        allowCreate="onFilter"
                        onSearch={this.handleNameSearch}
                        onCreate={this.handleNameCreate}
                        onChange={this.handleNameChange}
                    />
                </RBForm.Group>
                <RBForm.Row>
                    <RBForm.Group as={Col} controlId="periodStart">
                        <RBForm.Label>Odido</RBForm.Label>
                        <DateTimePicker
                            min={new Date(966, 0, 1)}
                            max={new  Date()}
                            format="Y"
                            date={true}
                            time={false}
                            views={["decade", "century"]}
                            onChange={this.handlePeriodStartChange}
                        />
                    </RBForm.Group>
                    <RBForm.Group as={Col} controlId="periodEnd">
                        <RBForm.Label>do</RBForm.Label>
                        <DateTimePicker
                            min={new Date(966, 0, 1)}
                            max={new  Date()}
                            format="Y"
                            date={true}
                            time={false}
                            views={["decade", "century"]}
                            onChange={this.handlePeriodStartChange}
                        />
                    </RBForm.Group>
                </RBForm.Row>
                <RBForm.Group controlId="description">
                    <RBForm.Label>Opis</RBForm.Label>
                    <RBForm.Control type="text" value={this.state.description} onChange={this.handleChange}/>
                </RBForm.Group>
                <Button variant="primary" type="submit">
                    Wyślij
                </Button>
            </RBForm>
        );
    }
}

export default Form;
