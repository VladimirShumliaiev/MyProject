import React, {useState} from 'react';
import style from './ReactTests.module.css'
import {useDispatch} from "react-redux";
import {addTodoTest} from "../../../Redux/Slices/testSlice";
import TestTodoInput from "./Tests Componnets/TestTodoInput";
import TestTodoList from "./Tests Componnets/TestTodoList";

const TestTodo = () => {
    const [text,setText] = useState('');
    const dispatch = useDispatch();

    const addTusk = () => {
        dispatch(addTodoTest({text}))
        setText('')
    }
    return (
        <div className={style.item}>
            <TestTodoInput text={text} setText={setText} addTodoTest={addTusk}/>
            <TestTodoList />
        </div>
    );
};

export default TestTodo;