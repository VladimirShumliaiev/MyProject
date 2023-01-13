import React from 'react';
import style from './AboutUs.module.css'

const AboutUsInput = ({title, setTitle, addTask}) => {
    return (
            <form onSubmit={e => {
                e.preventDefault()
                addTask()
                setTitle('')
            }}>
                <input className={style.input} value={title} onChange={e => setTitle(e.target.value)} placeholder={'add todo...'}/>
                <button className={style.buttonOk}>addTodo</button>
            </form>

    );
};

export default AboutUsInput;