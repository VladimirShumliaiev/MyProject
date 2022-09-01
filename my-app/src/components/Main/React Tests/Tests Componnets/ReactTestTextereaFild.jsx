import React from 'react';

const ReactTestTextereaFild = (props) => {
    return (
        <div>
            <textarea value={props.text} onChange={(e) => props.setText(e.target.value)}/>
            <button onClick={props.addSms}>Push</button>
        </div>
    );
};

export default ReactTestTextereaFild;