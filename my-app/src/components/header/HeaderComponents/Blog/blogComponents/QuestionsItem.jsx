import React from 'react';
import style from '../Blog.module.css';

const QuestionsItem = ({question, onClickVariants}) => {
    return (
        <h3>
            {question.title}
            {
                question.variants.map((e, index) => <li key={e} onClick={() => onClickVariants(index)}><button className={style.button}>{e}</button></li>)
            }
        </h3>
    );
};

export default QuestionsItem;