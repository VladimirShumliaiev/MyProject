import React, {useState} from 'react';
import style from './TextereaHome.module.css'


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
            <div>
                <textarea value={text} onChange={(e) => setText((e.target.value))} placeholder={'...Text'}>Ok</textarea>
                <button onClick={addPost}>OK</button>
            </div>
            <span>
                {
                    post.map(e => <div className={style.item} key={e.id}>
                        <img src="https://img.tsn.ua/cached/728/tsn-84ee4f9844c21d3af2b3cfbad2c9c711/thumbs/428x268/11/75/47324e04a2485d5bf16d6a549de57511.jpeg" alt=""/>
                        <span> {e.text}</span>
                    </div>)
                }
            </span>
        </div>

    );
};

export default TextereaHome;