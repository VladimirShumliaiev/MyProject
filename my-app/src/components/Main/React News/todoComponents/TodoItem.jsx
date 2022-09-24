import React from 'react';
import {useDispatch} from "react-redux";
import {removeTodo, toggleCompleted} from "../../../../Redux/Slices/todoSlice";
import style from '../ReactNews.module.css'

const TodoItem = ({id, text, completed}) => {
    const dispatch = useDispatch()
    const onChangeItem = () => {
        dispatch(toggleCompleted({id}))
    }
    const onClickButton = () => {
        dispatch(removeTodo({id}))
    }
    return (
        <li>
            <input
                type={"checkbox"}
                checked={completed}
                onChange={onChangeItem}
            />
            {text}
            <span onClick={onClickButton} className={style.delete}>
                &times;
            </span>
        </li>
    );
};

export default TodoItem;