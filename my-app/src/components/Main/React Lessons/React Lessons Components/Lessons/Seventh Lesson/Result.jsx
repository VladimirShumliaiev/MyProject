import React from 'react';
import questionsList from "./questionsList";
import style from './Quiz.module.css'


const Result = ({correct}) => {
    return (
            <div className="result">
                <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt={''} />
                <h2>Вы отгадали {correct} ответа из {questionsList.length}</h2>
                <a href={"/SeventhLesson"}>
                    <button className={style.button}>Попробовать снова</button>
                </a>

            </div>
    );
};

export default Result;