import React, {useState} from 'react';
import style from './TextereaHome.module.css'
import TextereaPostList from "./TextereaPostList";
import TextereaFild from "./TextereaFild";


const TextereaHome = () => {

    const [post, setPost] = useState([]);
    const [text, setText] = useState('');

    const addPost = () => {
        if (text.trim().length) {
            setPost([
                ...post,
                {
                    id: new Date().toISOString(),
                    text,
                }
            ])
            setText('');
        }
    }

    return (
        <div className={style.item}>
            <TextereaFild
                text={text}
                setText={setText}
                addPost={addPost}
            />
            <TextereaPostList post={post}/>
        </div>
    );
};

export default TextereaHome;