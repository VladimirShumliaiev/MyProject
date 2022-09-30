import React, {useEffect, useState} from 'react';
import './TwoLessons.css';
import {useDispatch, useSelector} from "react-redux";
import {addNewTodo, fetchTodos} from "../../../../../../Redux/Slices/twoLessonsSlice";
import TwoLessonsInputField from "./TwoLessonsInputField";
import TwoLessonsList from "./TwoLessonsList";

const TwoLessons = () => {
    const [title, setTitle] = useState('')
    const {status, error} = useSelector(state => state.twoLessons)
    const dispatch = useDispatch()
    const addTask = () => {
        if(title.trim().length){
            dispatch(addNewTodo(title))
            setTitle('')
        }
    }
    useEffect(() => {
        dispatch(fetchTodos())
    },[dispatch])
    return (
        <div className={'itemTwoLessons'}>
           Redux-Async:
            <TwoLessonsInputField title={title} setTitle={setTitle} addPost={addTask}/>
            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2>error:{error}</h2>}
            <TwoLessonsList/>
        </div>
    );
};

export default TwoLessons;