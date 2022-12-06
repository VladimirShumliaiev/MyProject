import React, {useState} from 'react';
import style from './TestCounter.module.css';

const TestCounter = () => {
    const [counter, setCounter] = useState(0);

    const onClickMinus = () => {
        setCounter(counter - 1)
        if (counter <= -5) {
            alert('minimum -5')
            setCounter(0)
        }
    }
    const onClickPlus = () => {
        setCounter(counter + 1)
        if (counter >= 5) {
            alert('minimum 5')
            setCounter(0)
        }
    }
    return (
        <div>
            <h3>Личильник:</h3>
            <h3>
                {counter}
            </h3>
            <button onClick={onClickMinus} className={style.counterMinus}>Minus -</button>
            <button onClick={onClickPlus} className={style.counterPlus}>+ Plus</button>
            <hr className={style.line}/>
        </div>
    );
};

export default TestCounter;