import React, {useState} from 'react';
import style from './Quiz.module.css'
import Game from "./Game";
import questionsList from "./questionsList";
import Result from "./Result";

const Quiz = () => {

    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)

    const onClickVariants = (index) => {
        setStep(step + 1)

        if (index === question.correct) {
            setCorrect(correct + 1)
        }
    }
    const question = questionsList[step]
    return (
        <div className={style.item}>
            {
                step !== questionsList.length ?  <Game question={question} onClickVariants={onClickVariants}/> : <Result correct={correct}/>
            }
        </div>

    );
};

export default Quiz;