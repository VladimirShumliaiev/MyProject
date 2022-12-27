import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTodoAboutFetch, fetchAboutUsTodo} from "../../../../Redux/Slices/aboutUsSlice";
import AboutUsInput from "./AboutUsInput";
import AboutUsList from "./AboutUsList";
import style from './AboutUs.module.css'

const AboutUs = () => {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()
    const {error, status} = useSelector(state => state.aboutUs)

    const addTask = () => {
        dispatch(addTodoAboutFetch(title))
        setTitle('')
    }

    useEffect(() => {
        dispatch(fetchAboutUsTodo())
    },[])
    console.log(useEffect)

    return (
        <div className={style.item}>
            <AboutUsInput title={title} setTitle={setTitle} addTodo={addTask}/>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            <AboutUsList/>
        </div>
    );
};

export default AboutUs;