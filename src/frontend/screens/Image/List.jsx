import React from 'react';
import ImageList from '../../components/Image/List';

const ScreensImageList = (props) => (
    <div className="workbench">
        <ImageList history={props.history}/>
    </div>
);

export default ScreensImageList;
