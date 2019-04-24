import React, { Suspense } from 'react';
import Spinner from 'react-spinner-material';
import NoteEditor from '../../components/Note/Editor';

const ScreensNoteEditor = (props) => (
    <div className="workbench">
        <Suspense fallback={<Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} />}>
            <div className="workbench-form">
                <NoteEditor match={props.match}/>
            </div>
        </Suspense>
    </div>
);

export default ScreensNoteEditor;
