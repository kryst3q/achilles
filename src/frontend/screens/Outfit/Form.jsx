import React, { Suspense } from 'react';
import Spinner from 'react-spinner-material';
import OutfitForm from '../../components/Outfit/Form.jsx';

const ScreensOutfitForm = () => (
    <div className="workbench">
        <Suspense fallback={<Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} />}>
            <div className="workbench-form">
                <OutfitForm/>
            </div>
        </Suspense>
    </div>
);

export default ScreensOutfitForm;
