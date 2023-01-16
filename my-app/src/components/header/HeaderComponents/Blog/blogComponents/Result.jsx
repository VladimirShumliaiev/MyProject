import React from 'react';
import style from '../Blog.module.css'
import questionList from "./questionList";


const Result = ({correct}) => {
    return (


        <div>
            <img src="https://www.congratulationmessage.com/images/congratulation-message.png" alt=""/>

            <h3 className={style.correct}>Вы ответили на {correct} из {questionList.length} ответов</h3>
            <a href="/Blog">
                <button className={style.buttonResult}>New game start</button>
            </a>
        </div>

    );
};

export default Result;