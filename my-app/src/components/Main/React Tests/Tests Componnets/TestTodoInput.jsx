import React from 'react';

const TestTodoInput = (props) => {
    return (
        <div>
            <input value={props.text} onChange={(e) => props.setText(e.target.value)}/>
            <button onClick={props.addTest}>PUSH PLZ</button>
        </div>
    );
};

export default TestTodoInput;