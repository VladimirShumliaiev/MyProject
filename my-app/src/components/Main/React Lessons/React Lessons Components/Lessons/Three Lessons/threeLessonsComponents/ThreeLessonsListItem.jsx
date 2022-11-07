import React from 'react';
import {useDispatch} from "react-redux";
import {threeRemoveTodo, threeToggleTodo} from "../../../../../../../Redux/Slices/threeLessonsSlice";

const ThreeLessonsListItem = ({id, title, completed}) => {
    const dispatch = useDispatch()

    const handleOnClick = () => {
        dispatch(threeRemoveTodo({id}))
    }

    const handleOnChange = () => {
        dispatch(threeToggleTodo({id}))
    }
    return (
        <div>
            <input onChange={handleOnChange} type={"checkbox"} checked={completed}></input>
            {title}
            <button onClick={handleOnClick}>&times;</button>
        </div>
    );
};

export default ThreeLessonsListItem;