import React, { Component } from 'react';
import axios from 'axios';
import {getI18n, withTranslation} from 'react-i18next';
import { Editor } from '@tinymce/tinymce-react';

class NoteEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {
                content: ''
            }
        };

        this.handleEditorChange = this.handleEditorChange.bind(this);
    }

    componentDidMount() {
        // axios
    }

    handleEditorChange(e) {
        this.setState({
           note: {
               content: e.target.getContent()
           }
        });
    }

    render() {
        const { t } = this.props;

        return (
            <Editor
                initialValue={this.state.note.content}
                init={{
                    plugins: 'link image code',
                    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                }}
                onChange={this.handleEditorChange}
            />
        );
    }
}

export default withTranslation('noteEditor')(NoteEditor);
