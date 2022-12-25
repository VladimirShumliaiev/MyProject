import React from 'react';
import questionsList
    from "../../../../Main/React Lessons/React Lessons Components/Lessons/Seventh Lesson/questionsList";
import style from '../Blog.module.css'

const Result = ({correct}) => {
    return (
        <div>
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt={''}/>
            <h2>Вы отгадали {correct} ответа из {questionsList.length}</h2>
            <a href={"/blog"}>
                <button className={style.button}>Попробывать ещё</button>
            </a>
        </div>
    );
};

export default Result;