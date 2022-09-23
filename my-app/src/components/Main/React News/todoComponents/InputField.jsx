import React from 'react';

const InputField = (props) => {
    return (
        <div>
            <input value={props.text} onChange={e => props.setText(e.target.value)}/>
            <button onClick={props.addTodos}>Push</button>
        </div>
    );
};

export default InputField;