import React from 'react';
import {useDispatch} from "react-redux";
import {removePost, toggleCompleted} from "../../../../../../Redux/Slices/twoLessonsSlice";
import style from './ListItem.module.css'

const TwoLessonsListItem = ({completed, title, id}) => {
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(removePost({id}))
    }
    const onChange = () => {
        dispatch(toggleCompleted({id}))
    }
    return (
        <li>
            <input type={"checkbox"} checked={completed} onChange={onChange}/>
            {title}
            <span onClick={onClick} className={style.deleted}>&times;</span>
        </li>
    );
};

export default TwoLessonsListItem;