import React from 'react';

const PostInput = ({title, setTitle, body, setBody, addPost}) => {
    return (
        <form onSubmit={e => {
            e.preventDefault()

            if(title !== '' && body !== '') {
                addPost()
            } else {
                if (title === '') {
                    alert('add title plz')
                }
                if (body === '') {
                    alert('add post plz')
                }
            }


        }}>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder={'add title...'}/>
            <input value={body} onChange={e => setBody(e.target.value)} placeholder={'add post...'}/>
            <button>add Post</button>
        </form>
    );
};

export default PostInput;