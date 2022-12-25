import React, {useState} from 'react';
import questionList from "./questionList";
import Game from "./Game";
import Result from "./Result";

const Quiz = () => {
    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)

    const onClickVariant = (e) => {
        setStep(step + 1)

        if (e === question.correct) {
            setCorrect(correct + 1)
        }
    }

    const question = questionList[step]
    return (
        <div>
            {
                step !== questionList.length ? <Game question={question} onClickVariant={onClickVariant}/> : <Result correct={correct} />
            }
        </div>
    );
};

export default Quiz;