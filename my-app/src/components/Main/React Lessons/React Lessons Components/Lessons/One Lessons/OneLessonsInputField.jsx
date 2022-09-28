import React from 'react';

const OneLessonsInputField = (props) => {
    return (
        <div>
            <input value={props.title} onChange={e => props.setTitle(e.target.value)} placeholder={'...Text'}/>
            <button onClick={props.addTodo}>Push me</button>
        </div>
    );
};

export default OneLessonsInputField;