import React from 'react';
import style from './testQuiz.module.css'
import testQuizList from "./testQuizList";

const TestResult = ({correct}) => {
    return (
        <div className={style.result}>
            <img  src="https://img.freepik.com/free-vector/card-template-with-fireworks-party-horns_1308-3021.jpg?w=2000" alt=""/>
            <h2>вы ответили {correct} из {testQuizList.length} вопросов</h2>
            <a href="/ReactTests">
                <button className={style.resultButton}>побробывать снова</button>
            </a>

        </div>
    );
};

export default TestResult;