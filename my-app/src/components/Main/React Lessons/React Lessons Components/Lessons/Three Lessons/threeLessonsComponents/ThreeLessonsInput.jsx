import React from 'react';

const ThreeLessonsInput = (props) => {
    return (
        <div>
            <input value={props.title} onChange={e => props.setTitle(e.target.value)}/>
            <button onClick={props.addTodo}>Push</button>
        </div>
    );
};

export default ThreeLessonsInput;