import React from 'react';
import {useDispatch} from "react-redux";
import {fetchRemoveThreeTodo, fetchToggle} from "../../../../../../../Redux/Slices/threeLessonsSlice";

const ThreeLessonsListItem = ({id, title, completed}) => {
    const dispatch = useDispatch()

    const handleOnClick = () => {
        const del = window.confirm(`you want to delete the todo under the name: ${title} ?`)

        if (del === true) {
            dispatch(fetchRemoveThreeTodo(id))
        } else {
            alert(`undo delete todo under name: ${title}`)
        }

    }

    const handleOnChange = () => {
        dispatch(fetchToggle(id))
    }
    return (<li>
            <input onChange={handleOnChange} type={"checkbox"} checked={completed}></input>
            {title}
            <button onClick={handleOnClick}>&times;</button>
            <hr/>
        </li>);
};

export default ThreeLessonsListItem;