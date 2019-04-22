import React from 'react';

const ListElement = (props) => {
    return (
        <div>
            <div>
                <p>{props.title}</p>
            </div>
            <div>
                <p>{props.content.substring(0, 100)}</p>
            </div>
        </div>
    );
};

export default ListElement;
