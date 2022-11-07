import React from 'react';
import style from "../ThreeLessons.module.css";

const ThreeLessonsInput = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addTask()
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e)
        }
    }


    return (

        <div>
            <input
                className={style.input}
                value={props.title}
                onChange={e => props.setTitle(e.target.value)}
                onKeyDown={handleKeyPress}
            />
            <button className={style.button} onClick={props.addTask}>Push</button>
        </div>
    );
};

export default ThreeLessonsInput;