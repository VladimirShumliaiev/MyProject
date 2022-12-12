import React from 'react';
import style from './testQuiz.module.css'

const TestQuizItem = ({question, onClickVariants}) => {
    return (
        <ol>
            <h3>{question.title}</h3>
            {
                question.variants.map((e,i) =><li key={i}><button className={style.button} onClick={() => onClickVariants(i)}>{e}</button></li> )
            }
        </ol>
    );
};

export default TestQuizItem;