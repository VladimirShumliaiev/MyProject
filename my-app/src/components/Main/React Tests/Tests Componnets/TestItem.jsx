import React from 'react';
import {useDispatch} from "react-redux";
import {removeTestTodo, toggleCompletedTestTodo} from "../../../../Redux/Slices/testTodoSlice";
import style from './TestItem.module.css'

const TestItem = ({text, completed, id}) => {

    const dispatch = useDispatch()

    return (
        <li>
            <input
                type={'checkbox'}
                checked={completed}
                onChange={() => dispatch(toggleCompletedTestTodo({id}))}
            />
            {text}
            <span className={style.item} onClick={() => dispatch(removeTestTodo({id}))}>
                &times;
            </span>
        </li>
    );
};

export default TestItem;