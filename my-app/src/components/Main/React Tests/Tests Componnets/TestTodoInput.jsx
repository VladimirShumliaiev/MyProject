import React from 'react';

const TestTodoInput = (props) => {
    return (
        <div>
            <input value={props.text} onChange={(e) => props.setText(e.target.value)}/>
            <button onClick={props.addTodoTest}>Push</button>
        </div>
    );
};

export default TestTodoInput;