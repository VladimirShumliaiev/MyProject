import React from 'react';
import questionsList from "../../../React Lessons/React Lessons Components/Lessons/Seventh Lesson/questionsList";
import style from './testQuiz.module.css'

const TestResult = ({correct}) => {
    return (
        <div>
            <div className={style.result}>
                <img
                    src="https://cdn3.vectorstock.com/i/1000x1000/35/77/congratulations-card-banner-vector-27313577.jpg"
                    alt=""/>
            </div>
            <h2>вы ответили на {correct} из {questionsList.length} </h2>
            <a href={'ReactTests'}>
                <button className={style.resultButton}>попробывать ещё раз</button>
            </a>

        </div>
    );
};

export default TestResult;