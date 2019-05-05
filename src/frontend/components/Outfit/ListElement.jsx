import React from 'react';

const ListElement = (props) => {
    return (
        <div>
            <div>
                <img
                    /*
                     * TODO handle preparing path to images (global const?)
                     */
                    src={`uploads/${props.src}`}
                    height={150}
                />
            </div>
            <div>
                {props.names.map((name) => (
                    <span key={name.id}>
                        {name.displayValue}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ListElement;
