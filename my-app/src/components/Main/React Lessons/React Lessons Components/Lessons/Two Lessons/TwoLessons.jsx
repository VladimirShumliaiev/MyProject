import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAddTwoTodo, fetchTwoTodo} from "../../../../../../Redux/Slices/twoLessonsSlice";
import './TwoLessons.css'
import TwoLessonsInputField from "./TwoLessonsInputField";
import TwoLessonsList from "./TwoLessonsList";

const TwoLessons = () => {
    const [title, setTitle] = useState('')
    const {error, status} = useSelector(state => state.twoLessons)
    const dispatch = useDispatch()

    const addTask = () => {
        dispatch(fetchAddTwoTodo(title))
        setTitle('')
    }

    useEffect(() => {
        dispatch(fetchTwoTodo())
    },[dispatch])

    return (
        <div className={'itemTwoLessons'}>
            <TwoLessonsInputField title={title} setTitle={setTitle} addTwoTodo={addTask}/>
            {status === 'pending' && <h2>...Loading</h2>}
            {error && <h2>Error: {error}</h2>}
            <TwoLessonsList/>
        </div>
    );
};

export default TwoLessons;