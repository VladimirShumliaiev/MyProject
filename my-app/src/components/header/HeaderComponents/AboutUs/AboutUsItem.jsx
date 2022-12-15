import React from 'react';
import style from './AboutUs.module.css'
import {useDispatch} from "react-redux";
import {canselAboutUsTodo, statusAboutUsTodo} from "../../../../Redux/Slices/aboutUsSlice";

const AboutUsItem = ({title, completed, id}) => {
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(canselAboutUsTodo({id}))
    }

    const onChange = () => {
      dispatch(statusAboutUsTodo({id}))
    }
    return (
        <div className={style.aboutUsItem}>
            <hr className={style.hr}/>
            <span> <input onChange={onChange} className={style.inputCheckbox} type="checkbox" checked={completed}/></span>
            <span className={style.title}>{title}</span>
            <button onClick={onClick} className={style.button}>&times;</button>
        </div>
    );
};

export default AboutUsItem;