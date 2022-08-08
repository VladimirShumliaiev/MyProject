import React from 'react';
import TextereaPostItem from "./TextereaPostItem";

const TextereaPostList = (props) => {
    return (
        <span>
            {
                props.post.map(e => <TextereaPostItem post={e.post} key={e.id} {...e}/>)
            }
        </span>
    );
};

export default TextereaPostList;