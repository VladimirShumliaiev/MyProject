import React from 'react';

const OneLessonsItem = (props) => {
    return (
        <div key={props.id}>
            {props.text}
        </div>
    );
};

export default OneLessonsItem;