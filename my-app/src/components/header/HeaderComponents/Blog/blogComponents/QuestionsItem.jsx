import React from 'react';
import style from '../Blog.module.css';

const QuestionsItem = ({onClickVariants, question}) => {
    return (
        <div>
            {question.title}
            {
                question.variants.map((e, index) => <li key={e}>
                    <button className={style.button} onClick={() => onClickVariants(index)}>{e}</button>
                </li>)
            }
        </div>
    );
};

export default QuestionsItem;