import React from 'react';
import style from './Quiz.module.css'

const Game = ({question, onClickVariants}) => {
    return (
        <div>
            <h2>{question.title}</h2>
            {
                question.variants.map((e, index) => <li onClick={() => onClickVariants(index)} key={e}><button className={style.button}>{e}</button></li>)
            }

        </div>
    );
};

export default Game;