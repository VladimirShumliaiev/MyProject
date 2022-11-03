import React from 'react';

const InputItem = (props) => {
    return (
        <div>
            <input value={props.title} onChange={e => props.setTitle(e.target.value)} placeholder={'...text'}/>
            <button onClick={props.addTodo}>Push</button>
        </div>
    );
};

export default InputItem;