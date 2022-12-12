import React, {useEffect} from 'react';
import style from './Test.module.css'
import {useDispatch, useSelector} from "react-redux";
import Photo from "./PhotoJsonPlaceholder/Photo";
import {fetchPhoto} from "../../../../Redux/Slices/photoSlice";

const Test = () => {
    const {error, status} = useSelector(state => state.photo)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPhoto())
    },[])

    return (
        <div className={style.item}>
            {status === 'pending' && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
           <Photo/>
        </div>
    );
};

export default Test;