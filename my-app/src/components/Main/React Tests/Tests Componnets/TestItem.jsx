import React from 'react';
import style from './TestItem.module.css'
import {useDispatch} from "react-redux";
import {removeTestTodo, toggleCompleted} from "../../../../Redux/Slices/testTodoSlice";

const TestItem = ({id, text, completed}) => {
    const dispatch = useDispatch()
    return (
        <li>
            <input
                type={'checkbox'}
                checked={completed}
                onChange={() => dispatch(toggleCompleted({id}))}/>
            {text}
            <span className={style.item} onClick={() => dispatch(removeTestTodo({id}))}>
                &times;
            </span>
        </li>
    );
};

export default TestItem;