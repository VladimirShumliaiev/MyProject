import React from 'react';
import style from './Test.module.css'
import TestCounter from "./Tests Componnets/testCounter/TestCounter";
import TestQuiz from "./Tests Componnets/testQuiz/TestQuiz";
import TestCall from "./Tests Componnets/testInput/TestCall";
import TestInputRtkCell from "./Tests Componnets/TestInputRTK/TestInputRtkCell";
import OneTestNavLink from "./Tests Componnets/oneTest/OneTestNavLink";
import Todos from "./Tests Componnets/todo/Todos";




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
            <div>
                <TestInputRtkCell/>
            </div>
            <div>
              <OneTestNavLink/>
            </div>
            <div>
                <Todos/>
            </div>
        </div>
    );
};

export default Test;