import React from 'react';

const OneLessonsInputField = (props) => {
    return (
        <div>
            <input value={props.text} onChange={(e) => props.setText(e.target.value)}></input>
            <button onClick={props.addTusk}>Push</button>
        </div>
    );
};

export default OneLessonsInputField;