import React from 'react';
import style from './testQuiz.module.css'

const TestQuizItem = ({onClickVariants, question}) => {
    return (
        <div>
            <h2>{question.title}</h2>
            {
                question.variants.map((e,index )=> <li key={e} onClick={() => onClickVariants(index)}><button className={style.button}>{e}</button></li>)
            }
        </div>
    );
};

export default TestQuizItem;