import React from 'react';
import style from '../Blog.module.css'

const QuestionsItem = ({question, onClickVariants}) => {
    return (
        <div>
            <h3>{question.title}</h3>
            {
                question.variants.map((e, index) => <div key={e}><button onClick={() => onClickVariants(index)} className={style.button}>{e}</button></div>)
            }
        </div>
    );
};

export default QuestionsItem;