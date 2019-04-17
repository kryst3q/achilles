import React from 'react';

const ComparisionElement = (props) => {
    const { src } = props;

    return (
        <img
            src={`uploads/${src}`}
            height={50}
        />
    );
};


export default ComparisionElement;