import React from 'react';
import {useSelector} from "react-redux";
import PhotoItem from "./PhotoItem";

const PhotoList = () => {
    const selector = useSelector(state => state.users.photo)
    return (
        <div>
            {
                selector.map(e => <PhotoItem key={e.id} {...e}/>)
            }
        </div>
    );
};

export default PhotoList;