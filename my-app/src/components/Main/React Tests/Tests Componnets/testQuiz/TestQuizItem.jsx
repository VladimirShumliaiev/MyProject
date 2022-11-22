import React from 'react';
import style from './testQuiz.module.css'

const TestQuizItem = ({question, onClickVariants}) => {
    return (
        <div>
            <h2>Question number № {question.id}: {question.title}</h2>
            {
                question.variants.map((e,index) => <div onClick={() => onClickVariants(index)} key={e}><button className={style.resultButton}>{e}</button></div> )
            }
        </div>
    );
};

export default TestQuizItem;