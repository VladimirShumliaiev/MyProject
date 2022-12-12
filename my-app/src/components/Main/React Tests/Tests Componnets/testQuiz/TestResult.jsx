import React from 'react';
import style from './testQuiz.module.css'
import testQuizList from "./testQuizList";




const TestResult = ({correct}) => {
    return (
        <div>
            <img src="https://i.gifer.com/origin/70/7002393920593c5fde49da402fd1c7dd_w200.webp" alt=""/>
            <h2>вы ответили на {correct} из {testQuizList.length} вариантов</h2>
            <a href="/ReactTests">
                <button className={style.button}>поробывать снова</button>
            </a>

        </div>
    );
};

export default TestResult;