import React, { Component } from 'react';
import axios from 'axios';
import { withTranslation } from 'react-i18next';
import { Editor } from '@tinymce/tinymce-react';

class NoteEditor extends Component {
    constructor(props) {
        super(props);
        const { match: { params } } = props;

        this.state = {
            id: params.noteId,
            title: '',
            content: '',
            createdAt: '',
            updatedAt: ''
        };

        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
    }

    componentDidMount() {
        if ('0' !== this.state.id) {
            axios.get(`/note/${this.state.id}`)
                .then((r) => {
                    this.setState(r.data);
                })
                .catch((e) => console.log(e));
        }
    }

    handleEditorChange(e) {
        this.setState({
           content: e.target.getContent()
        });
    }

    handleTitleChange(e) {
        this.setState({
            title: e.target.value
        });
    }

    handleSaveClick() {
        axios
            .post('/note', this.state)
            .then((r) => {
                this.setState(r.data);

            })
            .catch((e) => console.log(e));
    }

    render() {
        const { t } = this.props;

        return (
            <div>
                <div>
                    <input
                        id='noteTitle'
                        type='text'
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                        placeholder={t('title.placeholder')}
                        required={true}
                    />
                </div>
                <div>
                    <Editor
                        value={this.state.content}
                        init={{
                            plugins: 'link image code',
                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                        }}
                        onChange={this.handleEditorChange}
                    />
                </div>
                <div>
                    <button type='button' onClick={this.handleSaveClick}>{t('save')}</button>
                </div>
            </div>
        );
    }
}

export default withTranslation('noteEditor')(NoteEditor);
