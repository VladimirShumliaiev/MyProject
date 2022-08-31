import React from 'react';

const ReactTestListItem = ({id, text}) => {
    return (
        <div key={id}>
            {text}
        </div>
    );
};

export default ReactTestListItem;