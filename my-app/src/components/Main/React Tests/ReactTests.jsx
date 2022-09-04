import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTest} from "../../../Redux/Slices/testSlice";
import ReactTestTextereaFild from "./Tests Componnets/ReactTestTextereaFild";
import ReactTestList from "./Tests Componnets/ReactTestList";
import style from './ReactTests.module.css'

const ReactTests = () => {
    const [text,setText] = useState('');
    const dispatch = useDispatch();

    const addTestCell = () => {
        dispatch(addTest({text}))
        setText('')
    }

    return (
        <div className={style.item}>
            <ReactTestTextereaFild text={text} setText={setText} addTest={addTestCell}/>
            <ReactTestList />
        </div>
    );
};

export default ReactTests;