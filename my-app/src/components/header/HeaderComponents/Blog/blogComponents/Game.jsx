import React from 'react';
import style from '../Blog.module.css'

const Game = ({question, onClickVariant}) => {

    return (
        <div>
            <h3>{question.title}</h3>
            {
                question.variants.map((e,index) => <li key={e} onClick={() => onClickVariant(index)}><button className={style.button}>{e}</button></li>)
            }
        </div>
    );
};

export default Game;