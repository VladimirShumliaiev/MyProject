import React from 'react';
import style from '../ReactNews.module.css'
import {useDispatch} from "react-redux";
import {removeTodo, toggleCompleted} from "../../../../Redux/Slices/todoSlice";

const TodoItem = ({id, text, completed}) => {
    const dispatch = useDispatch()
    const onChange = () => {
        dispatch(toggleCompleted({id}))
    }
    const onClick = () => {
        dispatch(removeTodo({id}))
    }
    return (
        <li>
            <input
                type={'checkbox'}
                checked={completed}
                onChange={onChange}
            />
            {text}
            <span className={style.delete} onClick={onClick}>
                &times;
            </span>
        </li>
    );
};

export default TodoItem;