import React, { Suspense } from 'react';
import Spinner from 'react-spinner-material';
import NoteEditor from '../../components/Note/Editor';

const ScreensNoteEditor = () => (
    <div className="workbench">
        <Suspense fallback={<Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} />}>
            <div className="workbench-form">
                <NoteEditor/>
            </div>
        </Suspense>
    </div>
);

export default ScreensNoteEditor;
