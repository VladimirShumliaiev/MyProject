import React from 'react';
import style from './TestItem.module.css'
import {useDispatch} from "react-redux";
import {removeTestTodo, toggleTestTodo} from "../../../../Redux/Slices/testTodoSlice";

const TestItem = ({id, text, completed}) => {
    const dispatch = useDispatch()
    return (
        <li>
            <input type={'checkbox'} checked={completed} onChange={() => dispatch(toggleTestTodo({id}))}/>

            {text}

            <span className={style.item} onClick={() => dispatch(removeTestTodo({id}))}>
                &times;
            </span>
        </li>
    );
};

export default TestItem;