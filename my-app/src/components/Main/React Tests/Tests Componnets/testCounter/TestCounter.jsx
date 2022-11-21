import React, {useState} from 'react';
import style from './TestCounter.module.css'

const TestCounter = () => {
    const [counter, setCounter] = useState(0)

    const onClickMinus = () => {
        setCounter(counter - 1)

        if (counter <= -5) {
            alert('Minimum -5')
            setCounter(0)
        }
    }
    const onClickPlus = () => {
        setCounter(counter + 1)
        if (counter >= 5) {
            alert('Maximum 5')
            setCounter(0)
        }
    }
    return (
        <div>
            <hr className={style.line}/>
            <h2>Counter:</h2>
            <h2>{counter}</h2>
            <button onClick={onClickMinus} className={style.counterMinus}>-Minus</button>
            &nbsp;
            <button onClick={onClickPlus} className={style.counterPlus}>Plus+</button>
            <hr className={style.line}/>
        </div>
    );
};

export default TestCounter;