import React from 'react';

const ReactTestTextereaFild = (props) => {
    return (
        <div>
            <textarea value={props.text} onChange={(e) => props.setText(e.target.value)} placeholder={'...S'}/>
            <button onClick={props.addTest}>Push</button>

        </div>
    );
};

export default ReactTestTextereaFild;