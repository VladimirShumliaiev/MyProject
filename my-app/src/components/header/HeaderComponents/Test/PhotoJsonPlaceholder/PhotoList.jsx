import React from 'react';
import style from '../Test.module.css'
import PhotoButton from "./PhotoButton";

const PhotoList = ({id, albumId, title, url, thumbnailUrl}) => {

    return (
        <div>
            <hr/>
            <div>
              Album: {albumId}
            </div>

            {title}
            <div>
                <img className={style.photo} src={url} alt=""/>
            </div>
            <div>
                <img className={style.miniPhoto} src={thumbnailUrl} alt=""/>
            </div>
            <PhotoButton albumId={albumId} id={id}/>
        </div>
    );
};

export default PhotoList;