import React from 'react';

const OneLessonsInputField = ({text,setText,addTusk}) => {
    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)}></input>
            <button onClick={addTusk}>Push</button>
        </div>
    );
};

export default OneLessonsInputField;