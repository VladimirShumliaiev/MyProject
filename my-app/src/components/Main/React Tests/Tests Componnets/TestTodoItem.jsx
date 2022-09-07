import React from 'react';
import {useDispatch} from "react-redux";
import {removeTest, toggleTest} from "../../../../Redux/Slices/testSlice";
import style from './testTodoItem.module.css'

const TestTodoItem = ({id, text, completed}) => {
    const dispatch = useDispatch()
    return (
        <li>
            <input
                checked={completed}
                type={"checkbox"}
                onChange={() => dispatch(toggleTest({id}))}
            />
            <span>
                   {text}
            </span>

            <span className={style.item} onClick={() => dispatch(removeTest({id}))}>
                          &times;
            </span>
        </li>
    );
};

export default TestTodoItem;