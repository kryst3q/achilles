import React, { Suspense } from 'react';
import Spinner from 'react-spinner-material';
import ImageForm from '../../components/Image/Form';

const ScreensImageForm = (props) => (
    <div className="workbench">
        <Suspense fallback={<Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} />}>
            <div className="workbench-form">
                <ImageForm match={props.match}/>
            </div>
        </Suspense>
    </div>
);

export default ScreensImageForm;
