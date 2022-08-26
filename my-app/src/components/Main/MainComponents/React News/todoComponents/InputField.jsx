import React from 'react';

const InputField = ({text,setText,addTusk}) => {
    return (
            <label>
                <input value={text} onChange={(e) => setText(e.target.value)}></input>
                <button onClick={addTusk}>Add Todos</button>
            </label>
    );
};

export default InputField;