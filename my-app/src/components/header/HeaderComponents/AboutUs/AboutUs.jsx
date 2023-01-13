import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addAboutTodo} from "../../../../Redux/Slices/aboutUsSlice";
import AboutUsInput from "./AboutUsInput";
import AboutUsList from "./AboutUsList";
import style from './AboutUs.module.css'

const AboutUs = () => {
    const [title, setTitle] = useState([])
    const dispatch = useDispatch()

    const addTask = () => {
        dispatch(addAboutTodo({title}))
    }
    return (
        <div className={style.item}>
            <AboutUsInput title={title} setTitle={setTitle} addTask={addTask}/>
            <AboutUsList/>
        </div>
    );
};

export default AboutUs;