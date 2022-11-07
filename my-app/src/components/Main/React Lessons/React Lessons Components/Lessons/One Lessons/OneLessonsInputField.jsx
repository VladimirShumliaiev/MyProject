import React from 'react';

const OneLessonsInputField = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addTodo()
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e)
        }
    }
    return (
        <div>
            <input type={"text"} value={props.title} onChange={e => props.setTitle(e.target.value)}
                   onKeyDown={handleKeyDown} placeholder={'...Text'}/>
            <button onClick={props.addTodo}>Push me</button>
        </div>
    );
};

export default OneLessonsInputField;