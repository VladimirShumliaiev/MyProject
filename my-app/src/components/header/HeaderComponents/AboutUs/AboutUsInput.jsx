import React from 'react';
import myStyle from './AboutUs.module.css'

const AboutUsInput = ({title, setTitle, addTodo}) => {
    return (
        <form onSubmit={e => {
            e.preventDefault()
            if (title !== '') {
                addTodo()
            }
        }}>
            <input className={myStyle.input} value={title} onChange={e => setTitle(e.target.value)} placeholder={'title...'}/>
            <button className={myStyle.buttonOk}>addTodo</button>
        </form>
    );
};

export default AboutUsInput;