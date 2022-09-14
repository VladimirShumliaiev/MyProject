import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTestTodo} from "../../../Redux/Slices/testTodoSlice";
import style from './Test.module.css'
import TestInput from "./Tests Componnets/TestInput";
import TestList from "./Tests Componnets/TestList";


const Test = () => {
    const [text,setText] = useState('')
    const dispatch = useDispatch()

    const addTusk = () => {
        dispatch(addTestTodo({text}))
        setText('')
    }
    return (
        <div className={style.item}>
            <TestInput text={text} setText={setText} addTestTodo={addTusk}/>
            <TestList/>
        </div>
    );
};

export default Test;