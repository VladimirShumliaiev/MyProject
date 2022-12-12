import React from 'react';
import {useDispatch} from "react-redux";
import style from '../Test.module.css'
import {fetchPhotoDelete} from "../../../../../Redux/Slices/photoSlice";

const PhotoButton = ({id, albumId}) => {
    const dispatch = useDispatch()

    const onClickDeletePhoto = () => {
        const del = window.confirm(`Delete photo album:${albumId} id:${id}`)

        if (del === true) {
            dispatch(fetchPhotoDelete(id))
        }
    }
    return (
        <div>
            <button className={style.button} onClick={onClickDeletePhoto}>Delete photo</button>
        </div>
    );
};

export default PhotoButton;