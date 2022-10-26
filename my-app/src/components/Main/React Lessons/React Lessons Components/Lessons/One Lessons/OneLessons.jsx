import React, {useState} from 'react';
import './OneLessons.css'
import {useDispatch} from "react-redux";
import {addTodo} from "../../../../../../Redux/Slices/oneLessonsSlice";
import OneLessonsInputField from "./OneLessonsInputField";
import OneLessonsList from "./OneLessonsList";
import One from "./testSelect/One";
import Two from "./testSelect/Two";
import Three from "./testSelect/Three";

const OneLessons = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [value, setValue] = useState('')
    const addTask = () => {
        dispatch(addTodo({title}))
        setTitle('')
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <div className={'itemOneLessons'}>
            <OneLessonsInputField title={title} setTitle={setTitle} addTodo={addTask}/>
            <OneLessonsList/>
            <hr className={'hr'}/>

            <select value={value} onChange={handleChange}>
                <option value={`1`}>One</option>
                <option value={'2'}>Two</option>
                <option value={'3'}>Three</option>
            </select>

            <p>
                {value === `1` &&<h2> <One/></h2>}
                {value === '2' && <Two/>}
                {value === '3' && <Three/>}
            </p>
        </div>
    );
};

export default OneLessons;