import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTest} from "../../../Redux/Slices/testSlice";
import TestTodoInput from "./Tests Componnets/TestTodoInput";
import TestTodoList from "./Tests Componnets/TestTodoList";
import style from './ReactTests.module.css'

const TestTodo = () => {
    const [text,setText] = useState('');
    const dispatch = useDispatch();

    const addTusk = () => {
        dispatch(addTest({text}))
        setText('')
    }

    return (
        <div className={style.item}>
            <TestTodoInput text={text} setText={setText} addTest={addTusk}/>
            <TestTodoList/>
        </div>
    );
};

export default TestTodo;