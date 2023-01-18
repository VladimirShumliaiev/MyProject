import React from 'react';
import myStyle from './Post.module.css'
import {useDispatch} from "react-redux";
import {deletePost} from "../../../../../../Redux/Slices/postSlice";

const PostItem = ({title, body, id}) => {
    const dispatch = useDispatch()

  const onClickDel = () => {
        dispatch(deletePost({id}))
  }

    return (
        <li className={myStyle.item}>
            <div className={myStyle.post}>
                <hr/>
                <div>Title:{title}</div>
                <div>Post:{body} </div>
            </div>
            <div className={myStyle.r}>
                <hr/>
                <button onClick={onClickDel} className={myStyle.delete}>delete</button>
            </div>



        </li>
    );
};

export default PostItem;