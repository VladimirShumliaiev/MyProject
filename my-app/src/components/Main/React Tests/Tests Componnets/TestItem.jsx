import React from 'react';
import {useDispatch} from "react-redux";
import {testRemove, testToggleCompleted} from "../../../../Redux/Slices/testSlice";
import style from './TestItem.module.css'

const TestItem = ({text,completed,id}) => {
    const dispatch = useDispatch()

    return (
        <li>
            <input
                type={'checkbox'}
                checked={completed}
                onChange={() => dispatch(testToggleCompleted({id}))}
            />
            {text}
            <span className={style.item} onClick={() => dispatch(testRemove({id}))}>
                &times;
            </span>
        </li>
    );
};

export default TestItem;