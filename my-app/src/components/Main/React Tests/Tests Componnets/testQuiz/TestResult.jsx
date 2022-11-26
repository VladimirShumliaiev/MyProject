import React from 'react';
import questionsList from "../../../React Lessons/React Lessons Components/Lessons/Seventh Lesson/questionsList";
import style from './testQuiz.module.css'

const TestResult = ({correct}) => {
    return (
        <div>
            <img src="https://i.gifer.com/origin/70/7002393920593c5fde49da402fd1c7dd_w200.webp" alt=""/>
            <h2>вы ответили на {correct} из {questionsList.length} вариантов</h2>
            <a href="/ReactTests">
                <button className={style.resultButton}>поробывать снова</button>
            </a>

        </div>
    );
};

export default TestResult;