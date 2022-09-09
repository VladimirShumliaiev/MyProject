import React from 'react';
import {useDispatch} from "react-redux";
import {removeTest, toggleToCompletedTest} from "../../../../Redux/Slices/testSlice";
import style from './testTodoItem.module.css'

const TestTodoItem = ({id,text,completed}) => {
    const dispatch = useDispatch()

    return (
        <li>
            <input
                type={'checkbox'}
                checked={completed}
                onChange={() => dispatch(toggleToCompletedTest({id}))}
            />
            {text}
            <span className={style.item} onClick={() => dispatch(removeTest({id}))}>
                &times;
            </span>
        </li>
    );
};

export default TestTodoItem;