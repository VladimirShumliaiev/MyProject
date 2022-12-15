import React from 'react';
import style from './AboutUs.module.css'

const AboutUsInput = ({addTodo, setTitle, title}) => {
    return (
        <form onSubmit={e => {
            e.preventDefault()
            addTodo()
        }}>
            <input className={style.input} value={title} onChange={e => setTitle(e.target.value)}/>
            <button>>>>push>>></button>
        </form>
    );
};

export default AboutUsInput;