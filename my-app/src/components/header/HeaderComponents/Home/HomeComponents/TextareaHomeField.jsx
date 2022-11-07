import React from 'react';


const TextareaHomeField = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addTusk()
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e)
        }
    }
    return (
        <div>
            <textarea
                value={props.text}
                onChange={(e) => props.setText((e.target.value))}
                placeholder={'...Text'}
                onKeyDown={handleKeyDown}
            />

            <button onClick={props.addTusk}>OK</button>
        </div>
    );
};

export default TextareaHomeField;