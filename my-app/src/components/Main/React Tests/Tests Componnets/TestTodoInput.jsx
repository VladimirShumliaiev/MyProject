import React from 'react';


const TestTodoInput = (props) => {
    return (
        <ol>
            <input value={props.text} onChange={e => props.setText(e.target.value)}/>
            <button onClick={props.addTest}>Push</button>
        </ol>
    );
};

export default TestTodoInput;