import React, {useState} from 'react';
import style from './Counter.module.css'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const onClickPlus = () => {
        setCounter(counter +1)

        if (counter >= 5) {
            alert('Maximum 5')
            setCounter(0)
        }
    }

    const onClickMinus = () => {
        setCounter(counter - 1)
        if (counter <= -5) {
            alert('Minimum 5')
            setCounter(0)
        }
    }
    return (
        <div className={style.item}>
            <h3>Лічильник:</h3>
            <h3>
                {counter}
            </h3>
            <button className={style.buttonMinus} onClick={onClickMinus}>- Minus</button>
            <button className={style.buttonPlus} onClick={onClickPlus}>Plus +</button>
        </div>
    );
};

export default Counter;