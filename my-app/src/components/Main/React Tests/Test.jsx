import React, {useState} from 'react';
import style from './Test.module.css'
import {useDispatch} from "react-redux";
import {addTest} from "../../../Redux/Slices/testSlice";
import TestInput from "./Tests Componnets/TestInput";
import TestList from "./Tests Componnets/TestList";

const Test = () => {
    const [text,setText] = useState('')
    const dispatch = useDispatch()

    const addTests = () => {
        dispatch(addTest({text}))
        setText('')
    }
    return (
        <div className={style.item}>
            <TestInput text={text} setText={setText} addTest={addTests}/>
            <TestList/>
        </div>
    );
};

export default Test;