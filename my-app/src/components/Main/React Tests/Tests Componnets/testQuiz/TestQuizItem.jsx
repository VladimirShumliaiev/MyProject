import React from 'react';
import style from './testQuiz.module.css'

const TestQuizItem = ({onClickVariant,quest}) => {
    return (
        <div>
            <h2>{quest.title}</h2>
            {
                quest.variants.map((e,index) => <div key={e}><button className={style.resultButton} onClick={() => onClickVariant(index)}>{e}</button></div>)
            }
            <hr className={style.line}/>
        </div>
    );
};

export default TestQuizItem;