import React, {useState} from 'react';
import style from './Counter.module.css'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const onClickPlus = () => {
        setCounter(counter + 1)
        if (counter >= 10) {
            alert('Maximum +10')
            setCounter(0)
        }
    }
    const onClickMinus = () => {
        setCounter(counter - 1)
        if (counter <= -10) {
            alert('Minimum -10')
            setCounter(0)
        }
    }
    return (
        <div className={style.item}>
            <h3>Лічильник:</h3>
            <h2>{counter}</h2>
            <button className={style.buttonMinus} onClick={onClickMinus}>- Мінус</button>
            &nbsp;
            <button className={style.buttonPlus} onClick={onClickPlus}>Плюс +</button>
        </div>
    );
};

export default Counter;