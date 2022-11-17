import React, {useState} from 'react';
import style from './TestItem.module.css'

const TestCounter = () => {
    const [counter, setCounter] = useState(0)

    const minusHandler = () => {
        setCounter(counter - 1)
        if (counter <= -5) {
            alert('Minimum')
            setCounter(0)
        }
    }

    const plusHandler = () => {
        setCounter(counter + 1)
        if (counter >= 5) {
            alert('Maximum')
            setCounter(0)
        }
    }
    return (

        <div>
            <hr className={style.line}/>
            <h2>
                {counter}
            </h2>
            <button className={style.counterMinus} onClick={minusHandler}>- Minus</button>
            &nbsp;
            <button className={style.counterPlus} onClick={plusHandler}>Plus +</button>
            <hr className={style.line}/>
        </div>
    );
};

export default TestCounter;