import React, {useState} from 'react';
import style from './Counter.module.css'

const Counter = () => {
    const [counter, setCounter] = useState(0)

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
            alert('maximum 5')
            setCounter(0)
        }
    }

    return (
        <div className={style.item}>
            <h2>Лічильник:</h2>
            <h2>{counter}</h2>
            <button onClick={onClickMinus} className={style.buttonMinus}>- Мінус</button>
            &nbsp;
            <button onClick={onClickPlus} className={style.buttonPlus}>Плюс +</button>
        </div>
    );
};

export default Counter;