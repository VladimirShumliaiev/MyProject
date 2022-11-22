import React from 'react';
import style from "../ThreeLessons.module.css";

const ThreeLessonsInput = (props) => {
    //
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     props.addTask()
    // }
    //
    // const handleKeyPress = (e) => {
    //     if (e.key === 'Enter') {
    //         handleSubmit(e)
    //     }
    // }

    return (
        <form onSubmit={e => {
            e.preventDefault()
            props.addTask()
        }}>
            <input
                className={style.input}
                value={props.title}
                onChange={e => props.setTitle(e.target.value)}
                placeholder={'Введіть значення...'}
            />
            <button className={style.button}>Додати</button>
        </form>
    );
};

export default ThreeLessonsInput;