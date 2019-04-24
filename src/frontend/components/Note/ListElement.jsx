import React from 'react';

const ListElement = (props) => {
    const { title, content } = props;
    let div = document.createElement('div');
    div.innerHTML = content;
    const shortContent = div.innerText.substring(0, 100) + '...';

    return (
        <div>
            <div>
                <p>{title}</p>
            </div>
            <div>
                <p>{shortContent}</p>
            </div>
        </div>
    );
};

export default ListElement;
