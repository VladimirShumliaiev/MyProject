import React from 'react';
import style from './testQuiz.module.css'

const TestQuizItem = ({onClickVariants, question}) => {
    return (
        <div>
            <h2>{question.title}</h2>
            {
                question.variants.map((event, index) => <div key={event}><button className={style.item} onClick={() => onClickVariants(index)}>{event}</button></div>)
            }
        </div>
    );
};

export default TestQuizItem;