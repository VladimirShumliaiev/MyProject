import React from 'react';
import {useDispatch} from "react-redux";
import {removeTodo, toggleCompletedTodo} from "../../../../Redux/Slices/todoSlice";
import style from '../ReactNews.module.css';

const TodoItem = ({text, id, completed}) => {

    const dispatch = useDispatch()

    const onChangeInput = () => {
        dispatch(toggleCompletedTodo({id}))
    }
    const onClickButton = () => {
        dispatch(removeTodo({id}))
    }

    return (
        <li>
            <input
                type={'checkbox'}
                checked={completed}
                onChange={onChangeInput}
            />
            {text}
            <span className={style.delete} onClick={onClickButton}>
                &times;
            </span>
        </li>
    );
};

export default TodoItem;