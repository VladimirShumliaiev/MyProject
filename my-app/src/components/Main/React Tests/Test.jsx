import React from 'react';
import style from './Test.module.css'
import TestCounter from "./Tests Componnets/testCounter/TestCounter";
import TestQuiz from "./Tests Componnets/testQuiz/TestQuiz";
import TestCall from "./Tests Componnets/testInput/TestCall";


const Test = () => {
    return (
        <div className={style.item}>
            <div>
                <TestCall/>
            </div>
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