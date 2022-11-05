import React, {useEffect, useState} from 'react';
import style from './FourthLessons.module.css'
import {useDispatch, useSelector} from "react-redux";
import {addNewTodo,fetchTodoFourth} from "../../../../../../Redux/Slices/fourthLessonsSlice";
import InputItem from "./ FourthLessonseComponents/InputItem";
import List from "./ FourthLessonseComponents/List";


const FourthLessons = () => {
    const [title, setTitle] = useState('')
    const {error, status} = useSelector(state => state.fourthTodo)
    const dispatch = useDispatch()

    const addTusk = () => {
        dispatch(addNewTodo(title))
        setTitle('')
    }

    useEffect(() => {
        dispatch(fetchTodoFourth())
    }, [dispatch])
    return (
        <div className={style.item}>
            <InputItem title={title} setTitle={setTitle} addTodo={addTusk}/>
            {status === 'pending' && <h2>...Loading</h2>}
            {error && <h2>Error: {error}</h2>}
            <List/>
        </div>
    );
};

export default FourthLessons;