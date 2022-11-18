import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodoTest} from "../../../Redux/Slices/testTodoSlice";
import TestInput from "./Tests Componnets/TestInput";
import TestList from "./Tests Componnets/TestList";
import style from './Test.module.css'
import TestCounter from "./Tests Componnets/testCounter/TestCounter";
import TestQuiz from "./Tests Componnets/testQuiz/TestQuiz";


const Test = () => {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()

    const addTask = () => {
        dispatch(addTodoTest({title}))
        setTitle('')
    }
    return (
        <div className={style.item}>
            <TestInput title={title} setTitle={setTitle} addTodoTest={addTask}/>
            <TestList/>
            <div>
                <TestCounter/>
            </div>
            <div>
                <TestQuiz/>
            </div>
        </div>
    );
};

export default Test;