import React from 'react';
import style from './Quiz.module.css'
import questionsList from "./questionsList";




const Result = ({correct}) => {
    return (
        <div>
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt={''}/>
            <h2>Вы отгадали {correct} ответа из {questionsList.length}</h2>
            <a href={"SeventhLesson"}>
                <button className={style.button}>Попробовать снова</button>
            </a>

        </div>
    );
};

export default Result;