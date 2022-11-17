import React from 'react';

const TwoLessonsInputField = (props) => {

    const handlerSubmit = (event) => {
        event.preventDefault()
        props.addTwoTodo()
    }

    const handlerKeyDown = (event) => {
        if (event.key === 'Enter') {
            handlerSubmit(event)
            props.setTitle('')
        }
    }

    return (
        <div>
            <input value={props.title}
                   onChange={event => props.setTitle(event.target.value)}
                   onKeyDown={handlerKeyDown}
                   placeholder={'...Text'}
            />
            <button onClick={props.addTwoTodo}>Push</button>
        </div>
    );
};

export default TwoLessonsInputField;