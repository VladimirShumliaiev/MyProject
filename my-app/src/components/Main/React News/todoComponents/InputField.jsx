import React from 'react';

const InputField = (props) => {
    return (
        <div>
            <input value={props.title} onChange={e => props.setTitle(e.target.value)} placeholder={'...Text...'}/>
            <button onClick={props.addTodo}>Push</button>
        </div>
    );
};

export default InputField;