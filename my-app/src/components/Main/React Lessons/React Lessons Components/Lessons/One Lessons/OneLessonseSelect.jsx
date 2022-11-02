import React, {useState} from 'react';
import One from "./testSelect/One";
import Two from "./testSelect/Two";
import Three from "./testSelect/Three";
import './OneLessons.css'

const OneLessonsSelect = () => {
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <div>
            <select value={value} onChange={handleChange}>
                <option className={'colorOption-0'} value={'0'}>select one item from the list</option>
                <option value={'1'}>One</option>
                <option value={'2'}>Two</option>
                <option value={'3'}>Three</option>
            </select>

            <div>
                {value === `1` && <One/>}
                {value === '2' && <Two/>}
                {value === '3' && <Three/>}
            </div>
        </div>
    );
};

export default OneLessonsSelect;