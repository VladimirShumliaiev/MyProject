import React from 'react';

const TestInput = (props) => {
    return (
        <div>
            <input value={props.text} onChange={e => props.setText(e.target.value)}/>
            <button onClick={props.addTest}>push</button>
        </div>
    );
};

export default TestInput;