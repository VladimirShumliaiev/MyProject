import React from 'react';

const InputTest = (props) => {
    return (
        <div>
            <input value={props.text} onChange={(e) => props.setText(e.target.value)}/>
            <button onClick={props.addTest}>Push</button>
        </div>
    );
};

export default InputTest;