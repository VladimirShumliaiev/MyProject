import React from 'react';

const ThreeLessonsInput = (props) => {
    return (
        <div>
            <input value={props.title} onChange={e => props.setTitle(e.target.value)} placeholder={'...ADD TODO'}/>
            <button onClick={props.addTodo}>add Todo</button>
        </div>
    );
};

export default ThreeLessonsInput;