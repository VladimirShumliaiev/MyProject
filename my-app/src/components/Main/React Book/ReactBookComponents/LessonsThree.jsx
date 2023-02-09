import React from 'react';

const LessonsThree = () => {
    const sandwich = {
        bread: "dutch crunch",
        meat: "tuna",
        toppings: ['lettuce','tomato','mustard']
    }
    const {bread, meat, toppings} = sandwich
    return (
        <div>
            {bread} {meat} {toppings[2]}
        </div>
    );
};

export default LessonsThree;