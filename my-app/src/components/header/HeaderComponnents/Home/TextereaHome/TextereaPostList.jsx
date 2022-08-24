import React from 'react';
import TextereaPostItem from "./TextereaPostItem";

const TextereaPostList = (props) => {
    return (
        <span>
            {
                props.post.map(e => <TextereaPostItem key={e.id} {...e}/>)
            }
        </span>
    );
};

export default TextereaPostList;