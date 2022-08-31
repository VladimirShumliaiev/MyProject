import React from 'react';
import style from "../ReactNews.module.css";
import {useDispatch} from "react-redux";
import {removeTodo, toggleToCompleted} from "../../../../Redux/Slices/todoSlice";

const TodoItem = ({id, text, completed}) => {
    const dispatch = useDispatch();

    return (
        <li>
            <input
                type={'checkbox'}
                checked={completed}
                onChange={() => dispatch(toggleToCompleted({id}))}
            />
            <span>{text}</span>
            <span className={style.delete} onClick={() => dispatch(removeTodo({id}))}>
                &times;
            </span>
        </li>
    );
};

export default TodoItem;