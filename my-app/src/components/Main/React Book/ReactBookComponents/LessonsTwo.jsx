import React from 'react';
import myStyle from "./LessonsAll.module.css";

const LessonsTwo = () => {
    // const tahoe = {
    //     mountains: ['Freel','Rose','Tallac' ],
    //     print: function (delay = 1000) {
    //         setTimeout(function () {
    //             console.log(this.mountains.join(", "))
    //         }, delay)
    //     }
    // }
    // console.log(tahoe.print())
    const tahoe2 = {
        mountains: ['Freel', 'Rose', 'Tallac'],
        print: function (delay = 1000) {
            setTimeout(() => {
                console.log(this.mountains.join(", "))
            }, delay)
        }
    }
    tahoe2.print()
    return (
        <div className={myStyle.item}>
            Arrow functions and scope
        </div>
    );
};

export default LessonsTwo;