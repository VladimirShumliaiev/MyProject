import React from 'react';
import style from "./Quiz.module.css";

const Game = ({question, onClickVariant}) => {

    return (
        <div>
            <h1>{question.title}</h1>
            <ul>
                {
                    question.variants.map((e, index) => <li onClick={() => onClickVariant(index)} key={e}><button className={style.button}>{e}</button></li>)
                }
            </ul>
        </div>
    );
};

export default Game;