import React from 'react';

const ListElement = (props) => {
    const { name, src } = props;

    /* TODO handle preparing path to images (global const?) */
    return (
        <div>
            <img
                src={`/uploads/${src}`}
                height={150}
            />
            <p>{name}</p>
        </div>
    );
};

export default ListElement;
