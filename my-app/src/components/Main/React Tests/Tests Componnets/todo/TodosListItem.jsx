import React from 'react';
import {useDispatch} from "react-redux";
import {canselTodos, statusTodos} from "../../../../../Redux/Slices/todosSlice";
import style from './Todos.module.css'

const TodosListItem = ({id, completed, title}) => {
    const dispatch = useDispatch()

    const onClick = () => {
  const deleteTodo = window.confirm(`delete todo №:ID${id}`)

        if (deleteTodo === true) {
            dispatch(canselTodos({id}))
            alert(`deleted todo №:id ${id}`)
        } else {
            alert('ok no delete')
        }
    }
    const onChange = () => {
        dispatch(statusTodos({id}))
    }
    return (
        <div>
            <input className={style.itemInput} type="checkbox" checked={completed} onChange={onChange}/>
            {title}
            <button className={style.itemButton} onClick={onClick}>x</button>
        </div>
    );
};

export default TodosListItem;