import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { DateTimePicker, Multiselect } from 'react-widgets';

class OutfitForm extends Component {
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
        console.log(event);
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleNameSearch(name) {
        console.log(name);
    }

    handlePeriodStartChange(start) {

    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="names">
                    <Form.Label>Nazwy</Form.Label>
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
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId="periodStart">
                        <Form.Label>Odido</Form.Label>
                        <DateTimePicker
                            min={new Date(966, 0, 1)}
                            max={new  Date()}
                            format="Y"
                            date={true}
                            time={false}
                            views={["decade", "century"]}
                            onChange={this.handlePeriodStartChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="periodEnd">
                        <Form.Label>do</Form.Label>
                        <DateTimePicker
                            min={new Date(966, 0, 1)}
                            max={new  Date()}
                            format="Y"
                            date={true}
                            time={false}
                            views={["decade", "century"]}
                            onChange={this.handlePeriodStartChange}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="description">
                    <Form.Label>Opis</Form.Label>
                    <Form.Control type="text" value={this.state.description} onChange={this.handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Wyślij
                </Button>
            </Form>
        );
    }
}

export default OutfitForm;
