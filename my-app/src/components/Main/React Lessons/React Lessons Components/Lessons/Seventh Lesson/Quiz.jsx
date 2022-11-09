import React from 'react';
import style from './Quiz.module.css'

const Quiz = () => {
    const questions = [
        {
            title: 'React - это ... ?',
            variants: ['библиотека', 'фреймворк', 'приложение'],
            correct: 0,
        },
        {
            title: 'Компонент - это ... ',
            variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
            correct: 1,
        },
        {
            title: 'Что такое JSX?',
            variants: [
                'Это простой HTML',
                'Это функция',
                'Это тот же HTML, но с возможностью выполнять JS-код',
            ],
            correct: 2,
        },
    ];

    // function Result() {
    //     return (
    //         <div className="result">
    //             <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt={}/>
    //             <h2>Вы отгадали 3 ответа из 10</h2>
    //             <button>Попробовать снова</button>
    //         </div>
    //     );
    // }

    function Game() {
        return (
            <>
                <div className="progress">
                    <div style={{ width: '50%' }} className="progress__inner"></div>
                </div>
                <h1>Что такое useState?</h1>
                <ul>
                    <li><button className={style.button}>Это функция для хранения данных компонента</button></li>
                    <li><button className={style.button}>Это глобальный стейт</button></li>
                    <li><button className={style.button}>Это когда на ты никому не нужен</button></li>
                </ul>
            </>
        );
    }
    return (
        <div className={style.item}>
            <Game/>
        </div>
    );
};

export default Quiz;