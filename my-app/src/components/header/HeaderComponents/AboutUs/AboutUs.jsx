import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTodoAboutFetch, fetchAboutTodo} from "../../../../Redux/Slices/aboutUsSlice";
import AboutUsInput from "./AboutUsInput";
import AboutUsList from "./AboutUsList";

const AboutUs = () => {
    const [title, setTitle] = useState([])
    const dispatch = useDispatch()
    const {status, error} = useSelector(state => state.aboutUs)

    const addTask = () => {
        dispatch(addTodoAboutFetch(title))
        setTitle([])
    }

    useEffect(() => {
        dispatch(fetchAboutTodo())
    },[])
    return (
        <div>
            <AboutUsInput title={title} setTitle={setTitle} addTodo={addTask}/>
            {status === 'pending' && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            <AboutUsList/>
        </div>
    );
};

export default AboutUs;