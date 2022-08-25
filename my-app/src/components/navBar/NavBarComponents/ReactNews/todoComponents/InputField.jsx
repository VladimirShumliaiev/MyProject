import React from 'react';

const InputField = ({text,handleInput,handelSubmit}) => {
    return (
            <label>
                <input value={text} onChange={(e) => handleInput(e.target.value)}></input>
                <button onClick={handelSubmit}>Add Todos</button>
            </label>
    );
};

export default InputField;