import React, { Component } from 'react';
import { DateTimePicker, Multiselect } from 'react-widgets';
import axios from 'axios';
import { withTranslation, getI18n } from 'react-i18next';
import { formatToSearchValue } from '../Helpers';
import Label from "../UI/Form/Label";
import styled from "styled-components";
import TextInput from "../UI/Form/TextInput";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Images: [],
            Names: [],
            datingStart: new Date(),
            datingEnd: new Date(),
            description: '',
            foundNames: [],
            isSubmitting: false,
            Language: {}
        };

        this.handleImageUpload = this.handleImageUpload.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleNameCreate = this.handleNameCreate.bind(this);
        this.handleNameSearch = this.handleNameSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.imageFileInput = React.createRef();
    }

    componentDidMount() {
        axios.get('/language/' + getI18n().language)
            .then(res => {
                this.setState({
                    Language: res.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleImageUpload(event) {
        let files = this.imageFileInput.current.files;

        for (let i = 0; i < files.length; i++) {
            let formData = new FormData();
            formData.append('file', files[i]);

            axios.post('/image', formData)
                .then(res => {
                    let Images = this.state.Images;
                    Images.push(res.data);

                    this.setState({
                        Images: Images
                    })
                })
                .catch(err => console.log(err))
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleNameCreate(name) {
        let newName = {
            displayValue: name,
            searchValue: formatToSearchValue(name),
            LanguageId: this.state.Language.id
        };

        axios.post('/name', newName)
            .then(r => {
                this.setState({
                    Names: [...this.state.Names, r.data],
                    foundNames: [...this.state.foundNames, r.data]
                })
            })
            .catch(e => console.log(e));
    }

    handleNameSearch(name) {
        if (2 < name.length) {
            axios.get('/name/search', {
                params: {
                    term: name,
                    LanguageId: this.state.Language.id
                }
            })
                .then(res => {
                    this.setState({
                        foundNames: res.data
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({
            isSubmitting: true
        });

        Promise.all(promises).then((Images) => {
            let data = {
                Names: this.state.Names,
                Images: this.state.Images,
                Description: {
                    description: this.state.description,
                    LanguageId: this.state.Language.id
                },
                Datings: [
                    {
                        start: this.state.datingStart,
                        end: this.state.datingEnd
                    }
                ]
            };

            axios.post('/outfit', data)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    this.setState({
                        isSubmitting: false
                    })
                });
        });
    }

    render() {
        const { t } = this.props;
        const InputGroup = styled.div`
            width: 100%;
            margin-bottom: 10px;
        `;
        const SubmitButton = styled.button`
            background-color: lightgreen;
        `;

        return (
            <form onSubmit={this.handleSubmit}>
                <InputGroup>
                    <Label htmlFor='names'>{ t('outfitForm:name.label') }</Label>
                    <Multiselect
                        id='names'
                        name='Names'
                        // messages={} TODO
                        style={{width: '80%', display: 'inline-block'}}
                        valueField='id'
                        textField='displayValue'
                        data={this.state.foundNames}
                        defaultValue={this.state.Names}
                        allowCreate='onFilter'
                        onSearch={this.handleNameSearch}
                        onCreate={this.handleNameCreate}
                        onChange={(value) => this.handleInputChange({
                            target: {
                                type: 'select',
                                name: 'Names',
                                value: value
                            }
                        })}
                    />
                </InputGroup>
                <InputGroup>
                    <Label htmlFor='dating'>{ t('outfitForm:dating.label') }</Label>
                    <div id='dating' style={{display: 'inline-block'}}>
                        <div style={{display: 'inline-block'}}>
                            <label htmlFor='datingStart'>{ t('outfitForm:dating.start.label') }</label>
                            <DateTimePicker
                                id='datingStart'
                                name='datingStart'
                                style={{width: '100px', display: 'inline-block'}}
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
                        <div style={{display: 'inline-block'}}>
                            <label htmlFor='datingEnd'>{ t('outfitForm:dating.end.label') }</label>
                            <DateTimePicker
                                id='datingEnd'
                                name='datingEnd'
                                style={{width: '100px', display: 'inline-block'}}
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
                </InputGroup>
                <InputGroup>
                    <Label htmlFor='description'>{ t('description.label') }</Label>
                    <TextInput
                        name='description'
                        value={this.state.description}
                        onChange={this.handleInputChange}
                    />
                </InputGroup>
                <InputGroup>
                    <Label htmlFor='image'>{ t('image.label') }</Label>
                    <input
                        type='file'
                        name='image'
                        ref={this.imageFileInput}
                        onChange={this.handleImageUpload}
                        multiple={true}
                        accept="image/jpeg,image/png"
                    />
                </InputGroup>
                <SubmitButton type='submit' disabled={this.state.isSubmitting}>
                    { t('outfitForm:submit.label') }
                </SubmitButton>
            </form>
        );
    }
}

export default withTranslation('outfitForm')(Form);
