import React from 'react';
import {useDispatch} from "react-redux";
import {removeTodo, toggleTodo} from "../../../../Redux/Slices/todoSlice";
import style from '../ReactNews.module.css'

const TodoItem = ({id, text, completed}) => {
    const dispatch = useDispatch()
    const onChange = () => {
        dispatch(toggleTodo({id}))
    }
    const onClick = () => {
        dispatch(removeTodo({id}))
    }
    return (
        <li>
            <input
                type={'checkbox'}
                checked={completed}
                onChange={onChange}/>

            {text}

            <span onClick={onClick} className={style.delete}>
                &times;
            </span>
        </li>
    );
};

export default TodoItem;