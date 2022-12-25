import React from 'react';
import style from './AboutUs.module.css'

const AboutUsInput = ({title, setTitle, addTodo}) => {
    return (
        <form onSubmit={e => {
            e.preventDefault()
            addTodo()
        }
        }>
            <input className={style.input}  value={title} onChange={e => setTitle(e.target.value)} placeholder={'Text...'}/>
            <button>Push</button>
        </form>
    );
};

export default AboutUsInput;