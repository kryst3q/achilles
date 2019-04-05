import React, { Component } from 'react';
import { DateTimePicker, Multiselect } from 'react-widgets';
import axios from 'axios';
import { withTranslation, getI18n } from 'react-i18next';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Names: [],
            datingStart: new Date(),
            datingEnd: new Date(),
            description: '',
            foundNames: [],
            isSubmitting: false,
            newNames: [],
            Language: {}
        };

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

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleNameCreate(name) {
        let Names = this.state.Names;
        let newNames = this.state.newNames;
        let newOption = {
            id: Names.length,
            displayValue: name,
            searchName: name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        };

        this.setState({
            Names: [...Names, newOption],
            newNames: [...newNames, newOption]
        })
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

        let files = this.imageFileInput.current.files;
        let Images = [];
        let ImagePromises = [];

        Array.from(files).map(file => ImagePromises.push(
                new Promise(function (resolve, reject) {
                    let formData = new FormData();
                    formData.append('file', file);

                    axios.post('/image/', formData)
                        .then(res => resolve(Images.push(res.data)))
                        .catch(err => reject(console.log(err)))
                })
            )
        );

        Promise.all(ImagePromises).then(() => {
            let data = {
                Names: this.state.Names,
                Images: Images,
                Description: {
                    description: this.state.description,
                    LanguageId: this.state.Language.id
                }
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

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='names'>{ t('outfitForm:name.label') }</label>
                    <Multiselect
                        id='names'
                        name='Names'
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
                    <label htmlFor='description'>{ t('description.label') }</label>
                    <input
                        type='text'
                        name='description'
                        value={this.state.description}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor='image'>{ t('image.label') }</label>
                    <input
                        type='file'
                        name='image'
                        ref={this.imageFileInput}
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
