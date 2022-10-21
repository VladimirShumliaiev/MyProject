import React from 'react';
import style from './Photo.module.css'

const PhotoItem = ({title, url, thumbnailUrl, albumId}) => {
    return (
        <div className={style.item}>
            <div>
                {title}
            </div>
            <pre/>
            <div>
                <img src={url} alt=""/>
            </div>
            <div>
                <img src={thumbnailUrl} alt=""/>
                <div>
                    albumID: {albumId}
                </div>

            </div>
        </div>
    );
};

export default PhotoItem;