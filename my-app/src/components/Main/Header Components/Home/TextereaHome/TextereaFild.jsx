import React from 'react';

const TextereaFild = (props) => {
    return (
        <div>
                <textarea value={props.text} onChange={(e) => props.setText((e.target.value))} placeholder={'...Text'}></textarea>
                <button onClick={props.addPost}>OK</button>
        </div>
    );
};

export default TextereaFild;