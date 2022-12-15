import React, {useEffect, useState} from 'react';
import style from './AboutUs.module.css';
import {useDispatch, useSelector} from "react-redux";
import {addFetchTodo, fetchAboutUsTodo} from "../../../../Redux/Slices/aboutUsSlice";
import AboutUsInput from "./AboutUsInput";
import AboutUsList from "./AboutUsList";

const AboutUs = () => {
    const {status, error} = useSelector(state => state.aboutAs)
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()

    const addTask = () => {
        dispatch(addFetchTodo(title))
        setTitle('')
    }

    useEffect(() => {
        dispatch(fetchAboutUsTodo())
    },[])
    return (
        <div className={style.item}>
           <AboutUsInput title={title} setTitle={setTitle} addTodo={addTask}/>
            {status === 'pending' && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            <AboutUsList/>
        </div>
    );
};

export default AboutUs;