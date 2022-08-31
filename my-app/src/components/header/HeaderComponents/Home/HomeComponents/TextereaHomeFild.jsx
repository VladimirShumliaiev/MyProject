import React from 'react';


const TextereaHomeFild = (props) => {
    return (
        <div>
            <textarea value={props.text} onChange={(e) => props.setText((e.target.value))}
                      placeholder={'...Text'}></textarea>
            <button onClick={props.addTusk}>OK</button>
        </div>
    );
};

export default TextereaHomeFild;