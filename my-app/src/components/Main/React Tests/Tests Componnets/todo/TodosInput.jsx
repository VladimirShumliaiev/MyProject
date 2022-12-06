import React from 'react';
import style from './Todos.module.css'

const TodosInput = ({addTodos, title, setTitle}) => {
    return (
        <form onSubmit={e => {
            e.preventDefault()
        }}>
            <input className={style.itemInput} value={title} onChange={e => setTitle(e.target.value)} placeholder={'Text...'}/>
            <button className={style.itemButton} onClick={addTodos}>push</button>
        </form>
    );
};

export default TodosInput;