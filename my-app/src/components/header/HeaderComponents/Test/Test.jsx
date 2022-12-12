import React, {useEffect} from 'react';
import style from './Test.module.css'
import {useDispatch} from "react-redux";
import Photo from "./PhotoJsonPlaceholder/Photo";
import {fetchPhoto} from "../../../../Redux/Slices/photoSlice";

const Test = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPhoto())
    },[])

    return (
        <div className={style.item}>
           <Photo/>
        </div>
    );
};

export default Test;