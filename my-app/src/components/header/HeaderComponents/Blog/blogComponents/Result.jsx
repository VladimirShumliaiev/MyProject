import React from 'react';
import questionList from "./questionList";
import style from '../Blog.module.css'

const Result = ({correct}) => {
    return (
        <div>
            <img src="https://www.congratulationmessage.com/images/congratulation-message.png" alt=""/>
            <h3 className={style.styleResult}>Вы ответили на {correct} из {questionList.length} вопросов</h3>
            <a href="/Blog">
                <button className={style.buttonResult}>попробывать снова</button>
            </a>
        </div>
    );
};

export default Result;