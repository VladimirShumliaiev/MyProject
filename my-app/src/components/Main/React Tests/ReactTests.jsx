import React, {useState} from 'react';
import style from './ReactTests.module.css'
import {useDispatch} from "react-redux";
import {addSms} from "../../../Redux/Slices/testSlice";
import ReactTestTextereaFild from "./Tests Componnets/ReactTestTextereaFild";
import ReactTestList from "./Tests Componnets/ReactTestList";


const ReactTests = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const addTusk = () => {
        dispatch(addSms({text}));
        setText('')
    }

    return (
        <div className={style.item}>
            <ReactTestTextereaFild
                text={text}
                setText={setText}
                addSms={addTusk}
            />

            <ReactTestList/>

        </div>
    );
};

export default ReactTests;

