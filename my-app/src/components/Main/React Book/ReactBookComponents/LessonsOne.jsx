import React from 'react';
import myStyle from './LessonsAll.module.css'


const LessonsOne = () => {
    let person = (fn, ln) => ({
        first: fn,
        last: ln,
    })
    console.log(person('Oleg', 'hansone'))
    return (
        <div className={myStyle.item}>
            l1
        </div>


    )
};

export default LessonsOne;