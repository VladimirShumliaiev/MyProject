import React from 'react';
import style from './AboutUs.module.css'

const AboutUsInput = ({addTodo, title, setTitle}) => {
    return (
        <form onSubmit={e => {
            e.preventDefault()
            addTodo()
        }}>
            <input className={style.input} value={title} onChange={e => setTitle(e.target.value)} placeholder={'Text...'}/>
            <button className={style.buttonOk}>OK</button>
        </form>
    );
};

export default AboutUsInput;