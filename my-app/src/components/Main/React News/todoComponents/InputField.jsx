import React from 'react';

const InputField = (props) => {
    return (
            <label>
                <input value={props.text} onChange={(e) => props.setText(e.target.value)}></input>
                <button onClick={props.addTusk}>Add Todos</button>
            </label>
    );
};

export default InputField;