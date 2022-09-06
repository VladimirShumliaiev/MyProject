import React from 'react';



const TestInput = (props) => {
    return (
        <div>
            <input value={props.text} onChange={event => props.setText(event.target.value)}/>
            <button onClick={props.addText}>Push</button>
        </div>
    );
};

export default TestInput;