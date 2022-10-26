import React, {useState} from 'react';
import OneLessons from "../Lessons/One Lessons/OneLessons";
import TwoLessons from "../Lessons/Two Lessons/TwoLessons";
import ThreeLessons from "../Lessons/Three Lessons/Three Lessons";
import FourLessons from "../Lessons/FourLessons/FourLessons";



const ListOfLessons = () => {
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <>
            <select value={value} onChange={handleChange}>
                <option value={'one'}>One Lessons - React RTK</option>
                <option value={'two'}>Two Lessons - Redux Async</option>
                <option value={'three'}>Three Lessons</option>
                <option value={'four'}>Four Lessons</option>
            </select>

            <hr/>

            <p>
                {value === 'one' && <OneLessons/>}
                {value === 'two' && <TwoLessons/>}
                {value === 'three' && <ThreeLessons/>}
                {value === 'four' && <FourLessons/>}
            </p>
        </>
    );
};

export default ListOfLessons;