import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import TestInput from "./Tests Componnets/TestInput";
import TestList from "./Tests Componnets/TestList";
import {addTest} from "../../../Redux/Slices/testSlice";
import style from './ReactTests.module.css'

const ReactTests = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const addText = () => {
        dispatch(addTest({text}))
        setText('')
    }


    return (
        <div className={style.item}>
            <TestInput text={text} setText={setText} addText={addText}/>
            <TestList/>
        </div>
    );
};

export default ReactTests;