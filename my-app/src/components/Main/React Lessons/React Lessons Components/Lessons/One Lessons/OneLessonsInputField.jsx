import React from 'react';

const OneLessonsInputField = ({setTitle, addTodo, title}) => {
    return (
        <form onSubmit={e => {
            e.preventDefault()
            addTodo()
        }}>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder={'Text...'}/>
            <button>push</button>
        </form>
    );
};

export default OneLessonsInputField;