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
                <hr/>
                <option value={'1'}>One</option>
                <hr/>
                <option value={'2'}>Two</option>
                <hr/>
                <option value={'3'}>Three</option>
                <hr/>
            </select>

            <p>
                {value === `1` && <One/>}
                {value === '2' && <Two/>}
                {value === '3' && <Three/>}
            </p>
        </div>
    );
};

export default OneLessonsSelect;