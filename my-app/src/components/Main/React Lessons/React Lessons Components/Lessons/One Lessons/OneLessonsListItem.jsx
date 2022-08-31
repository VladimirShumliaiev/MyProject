import React from 'react';

const OneLessonsListItem = (props) => {
    return (
        <div key={props.id}>
            {props.text}
        </div>
    );
};

export default OneLessonsListItem;