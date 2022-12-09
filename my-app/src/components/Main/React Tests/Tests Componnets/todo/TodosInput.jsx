import React from 'react';

const TodosInput = ({title, setTitle , addTodos}) => {
    return (
        <form onSubmit={e => {
            e.preventDefault()
            addTodos()
        }}>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder={'Text...'}/>
            <button>Push</button>
        </form>
    );
};

export default TodosInput;