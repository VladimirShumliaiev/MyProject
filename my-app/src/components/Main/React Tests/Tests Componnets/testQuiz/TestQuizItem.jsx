import React from 'react';
import style from './testQuiz.module.css'

const TestQuizItem = ({question, onClickVariants}) => {
    return (
        <div>
            <h2>{question.title}</h2>
            {
                question.variants.map((e, index) => <div key={e}>
                    <button onClick={() => onClickVariants(index)} className={style.resultButton}>
                        {e}
                    </button>
                </div>)
            }
        </div>
    );
};

export default TestQuizItem;