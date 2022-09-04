import React, {useState} from 'react';
import style from './ReactTests.module.css'
import {useDispatch} from "react-redux";
import {addTest} from "../../../Redux/Slices/testSlice";
import InputTest from "./Tests Componnets/InputTest";
import TestList from "./Tests Componnets/TestList";

const ReactTests = () => {
    const [text,setText] = useState('');
    const dispatch = useDispatch()

    const addTusk = () => {
        dispatch(addTest({text}))
        setText('')
    }

    return (
        <div className={style.item}>
            <InputTest text={text} setText={setText} addTest={addTusk}/>
            <TestList/>
        </div>
    );
};

export default ReactTests;