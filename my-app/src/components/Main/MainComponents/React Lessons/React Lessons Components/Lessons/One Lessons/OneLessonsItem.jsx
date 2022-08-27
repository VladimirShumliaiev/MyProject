import React from 'react';

const OneLessonsItem = ({id,text}) => {
    return (
        <div key={id}>
            {text}
        </div>
    );
};

export default OneLessonsItem;