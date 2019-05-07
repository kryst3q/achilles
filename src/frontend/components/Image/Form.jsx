import React, { Component } from 'react';
import { DateTimePicker, Multiselect } from 'react-widgets';
import axios from 'axios';
import { withTranslation, getI18n } from 'react-i18next';
import { formatToSearchValue } from '../Helpers';

class Form extends Component {
    constructor(props) {
        super(props);
        const { match: { params } } = props;
        this.state = {
            id: params.imageId,
            name: '',
            author: '',
            description: '',
            storingPlace: '',
            originPlace: '',
            originDate: new Date(),
            isSubmitting: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.imageFileInput = React.createRef();
    }

    componentDidMount() {
        axios.get(`/image/${this.state.id}`)
            .then(res => {
                this.setState({ ...res.data, isSubmitting: false });
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

    handleSubmit(event) {
        event.preventDefault();

        this.setState({
            isSubmitting: true
        });

        axios.put(`/image/${this.state.id}`, this.state)
            .then(res => {
                // TODO redirect to list
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                this.setState({
                    isSubmitting: false
                })
            });

        // let files = this.imageFileInput.current.files;
        // let promises = [];
        //
        // Array.from(files).map(file => promises.push(
        //         new Promise(function (resolve, reject) {
        //             let formData = new FormData();
        //             formData.append('file', file);
        //
        //             axios.post('/image/', formData)
        //                 .then(res => resolve(res.data))
        //                 .catch(err => reject(console.log(err)))
        //         })
        //     )
        // );
        //
        // Promise.all(promises).then((Images) => {
        //     let data = {
        //         Names: this.state.Names,
        //         Images: Images,
        //         Description: {
        //             description: this.state.description,
        //             LanguageId: this.state.Language.id
        //         },
        //         Datings: [
        //             {
        //                 start: this.state.datingStart,
        //                 end: this.state.datingEnd
        //             }
        //         ]
        //     };
        //
        //     axios.post('/outfit', data)
        //         .then(res => {
        //             console.log(res);
        //         })
        //         .catch(err => {
        //             console.log(err);
        //         })
        //         .finally(() => {
        //             this.setState({
        //                 isSubmitting: false
        //             })
        //         });
        // });
    }

    render() {
        const { t } = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='name'>{ t('name.label') }</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor='author'>{ t('author.label') }</label>
                    <input
                        type='text'
                        id='author'
                        name='author'
                        value={this.state.author}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor='description'>{ t('description.label') }</label>
                    <input
                        type='text'
                        id='description'
                        name='description'
                        value={this.state.description}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor='storingPlace'>{ t('storingPlace.label') }</label>
                    <input
                        type='text'
                        id='storingPlace'
                        name='storingPlace'
                        value={this.state.storingPlace}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor='originPlace'>{ t('originPlace.label') }</label>
                    <input
                        type='text'
                        id='originPlace'
                        name='originPlace'
                        value={this.state.originPlace}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor='originDate'>{ t('originDate.label') }</label>
                    <DateTimePicker
                        id='originDate'
                        name='originDate'
                        min={new Date(966, 0, 1)}
                        max={new  Date()}
                        format='Y'
                        date={true}
                        time={false}
                        views={['decade', 'century']}
                        defaultValue={this.state.originDate}
                        onChange={(value) => this.handleInputChange({
                            target: {
                                type: 'datetime',
                                name: 'originDate',
                                value: value
                            }
                        })}
                    />
                </div>
                <div>
                    <label htmlFor='image'>{ t('image.label') }</label>
                    <input
                        type='file'
                        name='image'
                        ref={this.imageFileInput}
                        accept="image/jpeg,image/png"
                    />
                </div>
                <button type='submit' disabled={this.state.isSubmitting}>
                    { t('submit.label') }
                </button>
            </form>
        );
    }
}

export default withTranslation('imageForm')(Form);
