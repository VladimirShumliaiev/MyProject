import React, {useState} from 'react';
import myStyle from './AboutUs.module.css'
import {useDispatch} from "react-redux";
import {addTodo} from "../../../../Redux/Slices/aboutUsSlice";
import AboutUsInput from "./AboutUsInput";
import AboutUsList from "./AboutUsList";

const AboutUs = () => {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()

    const addTask = () => {
        dispatch(addTodo({title}))
        setTitle('')
    }

    return (
        <div className={myStyle.item}>
            <AboutUsInput title={title} setTitle={setTitle} addTodo={addTask}/>
            <AboutUsList/>
        </div>
    );
};

export default AboutUs;