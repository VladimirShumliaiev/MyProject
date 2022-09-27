import React from 'react';
import style from './TestItem.module.css'
import {useDispatch} from "react-redux";
import {deleteTestTodo, toggleStatus} from "../../../../Redux/Slices/testTodoSlice";

const TestItem = ({id, title, completed}) => {
    const dispatch = useDispatch()
    return (
        <li>
            <input
                type={'checkbox'}
                checked={completed}
                onChange={() => dispatch(toggleStatus(id))}/>
            {title}
            <span className={style.item} onClick={() => dispatch(deleteTestTodo(id))}>
                &times;
            </span>
        </li>
    );
};

export default TestItem;