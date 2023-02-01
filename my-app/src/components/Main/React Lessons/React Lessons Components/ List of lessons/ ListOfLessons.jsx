import React, {useState} from 'react';
import OneLessons from "../Lessons/One Lessons/OneLessons";
import TwoLessons from "../Lessons/Two Lessons/TwoLessons";
import ThreeLessons from "../Lessons/Three Lessons/Three Lessons";
import FourthLessons from "../Lessons/Fourth Lessons/FourthLessons";
import style from './ListItem.Module.css'
import Counter from "../Lessons/Fifth lesson - Counter/Counter";
import ModelWindow from "../Lessons/Sixth lesson - model window/ModelWindow";
import Quiz from "../Lessons/Seventh Lesson/Quiz";



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
                <option value={'fourth'}>Fourth Lessons</option>
                <option value={'fifth'}>Fifth Lessons</option>
                <option value={'sixth'}>Sixth Lessons</option>
                <option value={'seventh'}>Seventh Lessons</option>
            </select>

            <hr/>

            <p>
                {select === 'one' && <OneLessons/>}
                {select === 'two' && <TwoLessons/>}
                {select === 'three' && <ThreeLessons/>}
                {select === 'fourth' && <FourthLessons/>}
                {select === 'fifth' && <Counter/>}
                {select === 'sixth' && <ModelWindow/>}
                {select === 'seventh' && <Quiz/>}
            </p>
        </div>
    );
};

export default ListOfLessons;