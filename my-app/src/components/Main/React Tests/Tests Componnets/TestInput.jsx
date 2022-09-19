import React from 'react';

const TestInput = (props) => {
    return (
        <div>
            <input value={props.text} onChange={(e) => props.setText(e.target.value)} placeholder={'...Text'}/>
            <button onClick={props.addTestTodo}>Push</button>
        </div>
    );
};

export default TestInput;