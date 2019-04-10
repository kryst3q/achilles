import React from 'react';

const ListElement = (outfit) => (
    <div>
        <div>
            <img
                src={outfit.outfit.images[0].value}
                height={150}
            />
        </div>
        <div>
            {outfit.outfit.names.map((name) => (
                <span key={name.id.toString()}>
                    {name.value}
                </span>
            ))}
        </div>
    </div>
);

export default ListElement;
