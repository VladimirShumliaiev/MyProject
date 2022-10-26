import React, {useState} from 'react';
import OneLessons from "../Lessons/One Lessons/OneLessons";
import TwoLessons from "../Lessons/Two Lessons/TwoLessons";
import ThreeLessons from "../Lessons/Three Lessons/Three Lessons";
import FourLessons from "../Lessons/FourLessons/FourLessons";
import style from './ListItem.Module.css'



const ListOfLessons = () => {
    const [select, setSelect] = useState('')

    const handleChange = (e) => {
        setSelect(e.target.value)
    }
    return (
        <div  className={style.item}>
            <select value={select} onChange={handleChange}>
                <option value={'one'}>One Lessons - React RTK</option>
                <option value={'two'}>Two Lessons - Redux Async</option>
                <option value={'three'}>Three Lessons</option>
                <option value={'four'}>Four Lessons</option>
            </select>

            <hr/>

            <p>
                {select === 'one' && <OneLessons/>}
                {select === 'two' && <TwoLessons/>}
                {select === 'three' && <ThreeLessons/>}
                {select === 'four' && <FourLessons/>}
            </p>
        </div>
    );
};

export default ListOfLessons;