import React from 'react';
import {useDispatch} from "react-redux";
import {fetchCanselTodo, fetchStatusCompleted, toggleCompleted} from "../../../../Redux/Slices/todoSlice";
import style from '../ReactNews.module.css';

const TodoItem = ({id, title, completed}) => {
    const dispatch = useDispatch()
    const onClickSpan = () => {
        dispatch(fetchCanselTodo(id))
    }
    const onChangeInput = () => {
        dispatch(fetchStatusCompleted(id))
    }
    return (
        <li>
            <input
                type={'checkbox'}
                checked={completed}
                onChange={onChangeInput}
            />
            {title}
            <span className={style.delete} onClick={onClickSpan}>&times;</span>
        </li>
    );
};

export default TodoItem;