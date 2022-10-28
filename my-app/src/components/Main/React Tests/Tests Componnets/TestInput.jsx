import React from 'react';

const TestInput = (props) => {
    return (
        <div>
            <input value={props.title} onChange={e => props.setTitle(e.target.value)} placeholder={'...text'}/>
            <button onClick={props.addTodoTest}>Push test</button>
        </div>
    );
};

export default TestInput;