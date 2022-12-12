import React from 'react';
import {useSelector} from "react-redux";
import PhotoList from "./PhotoList";

const Photo = () => {
    const photoList = useSelector(state => state.photo.photo)
    return (
        <div>
            {
                photoList.map(e => <PhotoList key={e.id}{...e}/>)
            }
        </div>
    );
};

export default Photo;