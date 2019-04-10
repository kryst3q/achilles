import React from 'react';

const ListElement = (element) => {
    const outfit = element.outfit;

    return (
        <div>
            <div>
                <img
                    src={'uploads/' + outfit.Images[0].File.hash}
                    height={150}
                />
            </div>
            <div>
                {outfit.Names.map((name) => (
                    <span key={name.id.toString()}>
                    {name.displayValue}
                </span>
                ))}
            </div>
        </div>
    );
};

export default ListElement;
