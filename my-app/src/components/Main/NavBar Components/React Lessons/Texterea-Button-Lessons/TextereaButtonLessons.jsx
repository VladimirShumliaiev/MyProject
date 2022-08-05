import React from 'react';
import style from './textereaButtonLessons.module.css'

const TextereaButtonLessons = () => {
    return (
        <div className={style.item}>
            <div>
                hi
            </div>
           <textarea>...Play</textarea>
            <button>OK</button>
            <button>NO</button>
        </div>
    );
};

export default TextereaButtonLessons;