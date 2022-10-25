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
                <option value={'1'}>One Lessons - React RTK</option>
                <option value={'2'}>Two Lessons - Redux Async</option>
                <option value={'3'}>Three Lessons</option>
                <option value={'4'}>Four Lessons</option>
            </select>
            <hr/>
            <p>
                {value === '1' && <OneLessons/>}
                {value === '2' && <TwoLessons/>}
                {value === '3' && <ThreeLessons/>}
                {value === '4' && <FourLessons/>}
            </p>
        </>
    );
};

export default ListOfLessons;