import React, {useEffect, useState} from 'react';
import style from './AboutUs.module.css';
import {useDispatch} from "react-redux";
import {addTodoAboutUs, fetchAboutUsTodo} from "../../../../Redux/Slices/aboutUsSlice";
import AboutUsInput from "./AboutUsInput";
import AboutUsList from "./AboutUsList";

const AboutUs = () => {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()

    const addTask = () => {
        dispatch(addTodoAboutUs({title}))
        setTitle('')
    }

    useEffect(() => {
        dispatch(fetchAboutUsTodo())
    },[])
    return (
        <div className={style.item}>
           <AboutUsInput title={title} setTitle={setTitle} addTodo={addTask}/>
            <AboutUsList/>
        </div>
    );
};

export default AboutUs;