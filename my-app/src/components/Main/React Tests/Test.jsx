import React, {useState, useEffect} from 'react';
import style from './Test.module.css'
import {useDispatch, useSelector} from "react-redux";
import {addTestTodo, fetchTestTodos} from "../../../Redux/Slices/testTodoSlice";
import TestInput from "./Tests Componnets/TestInput";
import TestList from "./Tests Componnets/TestList";

const Test = () => {
    const [text,setText] = useState('')
    const {status, error} = useSelector(state => state.test)
    const dispatch = useDispatch()

    const addTask = () => {
        dispatch(addTestTodo({text}))
        setText('')
    }
    useEffect(() => {
        dispatch(fetchTestTodos())
    }, [dispatch])
    return (
        <div className={style.item}>
            <TestInput text={text} setText={setText} addTestTodo={addTask}/>
            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2>An error occured: {error}</h2>}
            <TestList/>
        </div>
    );
};

export default Test;