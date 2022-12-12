import React, {useState} from 'react';
import One from "./testSelect/One";
import Two from "./testSelect/Two";
import Three from "./testSelect/Three";


const OneLessonsSelect = () => {
    const [value, setValue] = useState('')

    const onChangeHandle = (e) => {
        setValue(e.target.value)
    }

    return (
        <div>
            <select value={value} onChange={onChangeHandle}>
                <option className={'colorOption-0'} value={'0'}>Category</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
            </select>
            {value === '1' && <One/>}
            {value === '2' && <Two/>}
            {value === '3' && <Three/>}
        </div>
    );
};

export default OneLessonsSelect;