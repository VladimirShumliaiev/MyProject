import React, {useState} from 'react';
import style from './ReactTests.module.css'
import {useDispatch} from "react-redux";
import {addTests} from "../../../Redux/Slices/testSlice";
import TestTodoInput from "./Tests Componnets/TestTodoInput";
import TestTodoList from "./Tests Componnets/TestTodoList";

const TestTodo = () => {
    const [text,setText] = useState('');
    const dispatch = useDispatch();

    const addTusk = () => {
        dispatch(addTests({text}))
        setText('')
    }
    return (
        <div className={style.item}>
            <TestTodoInput text={text} setText={setText} addTest={addTusk}/>
            <TestTodoList />
        </div>
    );
};

export default TestTodo;