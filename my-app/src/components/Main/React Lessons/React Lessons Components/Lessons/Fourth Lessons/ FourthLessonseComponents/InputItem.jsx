import React from 'react';

const InputItem = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addTodo()
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e)
        }
    }
    return (
        <div>
            <input
                value={props.title}
                onChange={e => props.setTitle(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={'...text'}
            />
            <button onClick={props.addTodo}>Push</button>
        </div>
    );
};

export default InputItem;