import React from 'react';
import {useDispatch} from "react-redux";
import {fetchToggle, threeRemoveTodo} from "../../../../../../../Redux/Slices/threeLessonsSlice";

const ThreeLessonsListItem = ({id, title, completed}) => {
    const dispatch = useDispatch()

    const handleOnClick = () => {
        dispatch(threeRemoveTodo({id}))
    }

    const handleOnChange = () => {
        dispatch(fetchToggle(id))
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