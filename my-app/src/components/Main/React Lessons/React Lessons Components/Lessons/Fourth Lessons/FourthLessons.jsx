import React, {useEffect, useState} from 'react';
import style from './FourthLessons.module.css'
import {useDispatch} from "react-redux";
import {addTodoFourth, fetchTodoFourth} from "../../../../../../Redux/Slices/fourthLessonsSlice";
import InputItem from "./ FourthLessonseComponents/InputItem";
import List from "./ FourthLessonseComponents/List";




const FourthLessons = () => {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()

    const addTusk = () => {
        dispatch(addTodoFourth({title}))
    }

    useEffect(() => {
        dispatch(fetchTodoFourth())
    },[dispatch])
    return (
        <div className={style.item}>
            <InputItem title={title} setTitle={setTitle} addTodo={addTusk}/>
            <List/>
        </div>
    );
};

export default FourthLessons;