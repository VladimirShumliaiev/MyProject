import React, {useState} from 'react';
import style from './TestCounter.module.css'

const TestCounter = () => {
    const [value, setValue] = useState(0)

    const onClickButtonPlus = () => {
        setValue(value + 1)
        if (value >= 5) {
            alert('Maximum 5')
            setValue(0)




        }
    }
    const onClickButtonMinus = () => {
        setValue(value - 1)
        if (value <= -5) {
            alert('Minimum -5')
            setValue(0)
        }
    }
    return (
        <div>
            <hr className={style.line}/>
            <h3>Личильник:</h3>
            <h3>{value}</h3>
            <button onClick={onClickButtonMinus} className={style.counterMinus}>-Minus</button>{' '}
            <button onClick={onClickButtonPlus} className={style.counterPlus}>Plus+</button>
            <hr className={style.line}/>
        </div>
    );
};

export default TestCounter;