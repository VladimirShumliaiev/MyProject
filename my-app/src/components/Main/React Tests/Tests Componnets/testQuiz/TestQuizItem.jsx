import React from 'react';
import style from './testQuiz.module.css'

const TestQuizItem = ({quest, onClickVariants}) => {
    return (
        <div>
            <h2>Вопрос №{quest.id}: {quest.title}</h2>
            {
                quest.variants.map((e, index) => <div key={e}><button className={style.resultButton} onClick={() => onClickVariants(index)}>{e}</button></div>)
            }
        </div>
    );
};

export default TestQuizItem;