import React from 'react';

const ReactTestTextereaFild = (props) => {
    return (
        <div>
            <textarea value={props.text} onChange={(e) => props.setText(e.target.value)} placeholder={'.....Sms'}/>
            <button onClick={props.addTest}>OK</button>
        </div>
    );
};

export default ReactTestTextereaFild;