import React from 'react';
import style from './testQuiz.module.css'

const TestQuizItem = ({onClickVariants, question}) => {
    return (
        <div>
            <h3>{question.title}</h3>
            {
              question.variants.map((e,index) => <div key={index}><button className={style.button} onClick={() => onClickVariants(index)}>{e}</button></div>)
            }
        </div>
    );
};

export default TestQuizItem;