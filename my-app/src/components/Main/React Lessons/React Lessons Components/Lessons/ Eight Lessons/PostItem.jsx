import React, {useState} from 'react';
import myStyle from './Post.module.css'
import {useDispatch} from "react-redux";
import {deletePost} from "../../../../../../Redux/Slices/postSlice";

const PostItem = ({title, body, id}) => {
    const [like, setLike] = useState(0)
    const dispatch = useDispatch()

    const onClickLike = () => {
        setLike(like + 1)
    }

    const onClickDel = () => {
        const del = window.confirm('delete Post?')
            if (del) {
                dispatch(deletePost({id}))
            }
    }

    return (
        <div className={myStyle.item}>
            <span className={myStyle.post}>
                <hr/>
                <li><h5>Title:{title}</h5></li>
                Post: {body}
                <div onClick={onClickLike} className={myStyle.like}><img  src="https://vjoy.cc/wp-content/uploads/2020/05/dbe2ee2dbdeeadd89c04ba6dccad3fab.png" alt=""/> like: {like}</div>

            </span>
            <div className={myStyle.r}>
                <hr/>
                <button onClick={onClickDel} className={myStyle.delete}>delete post</button>
            </div>
        </div>
    );
};

export default PostItem;