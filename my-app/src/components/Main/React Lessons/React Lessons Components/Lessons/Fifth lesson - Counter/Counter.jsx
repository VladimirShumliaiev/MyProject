import React, {useState} from 'react';
import style from './Counter.module.css'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const onClickPlus = () => {
        setCounter(counter + 1)
        if (counter >= 5) {
            alert('Maximum 5')
            setCounter(0)
        }
    }

    const onClickMinus = () => {
        setCounter(counter - 1)
        if (counter <= -5) {
            alert('Minimum -5')
            setCounter(0)
        }
    }
    return (<div className={style.item}>
            <h2>Лічільник:</h2>
            <div>
                <h2>{counter}</h2>
            </div>

            <button onClick={onClickMinus} className={style.buttonMinus}>- Мінус</button>
            &nbsp;
            <button onClick={onClickPlus} className={style.buttonPlus}>Плюс +</button>
        </div>);
};

export default Counter;