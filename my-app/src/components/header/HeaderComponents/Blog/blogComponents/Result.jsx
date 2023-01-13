import React from 'react';
import questionList from "./questionList";
import style from '../Blog.module.css'


const Result = ({correct}) => {
    return (
        <div>
            <img src="https://www.congratulationmessage.com/images/congratulation-message.png" alt=""/>
            <h3 className={style.styleResult}>
                вы ответили на <span className={style.correct}>{correct} </span> из <span className={style.correct}>{questionList.length}</span> ответов</h3>
            <a href="/blog">
                <button className={style.buttonResult}>попробывать снова</button>
            </a>
        </div>
    );
};

export default Result;