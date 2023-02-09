import React from 'react';
import LessonsThreeItem from "./LessonsTrhee/LessonsThreeItem";

const LessonsThree = () => {

    const arr2 = [
        {
            text: 'aaaaaaa',
            b: 'b',
            id: 1
        },
        {
            text: 'a2aaaaaaa',
            b: 'b2',
            id: 2
        },
        {
            text: 'a3aaaaaaa',
            b: 'b3',
            id: 3
        },
    ]

    const sandwich = {
        bread: "dutch crunch",
        meat: "tuna",
        toppings: ['lettuce','tomato','mustard','4']
    }
    const {bread, meat} = sandwich
    return (
        <div>
            {bread} {meat}
            {
                arr2.map((e) => <LessonsThreeItem key={e.id} {...e}/>)
            }
            <LessonsThreeItem/>
        </div>
    );
};

export default LessonsThree;