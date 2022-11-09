import React, {useState} from 'react';
import style from './ModelWindow.module.css'

const ModelWindow = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className={style.item}>
            <button className={style.button} onClick={() => setOpen(true)}><h3>Відкрити вікно</h3></button>
            {
                open && ( <div>
                        <h1 onClick={() => setOpen(false)} className={style.h1}>Закрити вікно: X</h1>
                        <img className={style.x} src="https://media0.giphy.com/media/APrCoRwYvskwr1Qm1w/giphy.gif?cid=790b761145224986aee1a977b2e2ecc94a9bbe10fbcfd65e&rid=giphy.gif&ct=g" alt=""/>
                </div>)
            }
        </div>
    );
};

export default ModelWindow;