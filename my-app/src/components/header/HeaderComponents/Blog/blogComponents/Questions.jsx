import React, {useState} from 'react';
import questionList from "./questionList";
import QuestionsItem from "./QuestionsItem";
import Result from "./Result";

const Questions = () => {
    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)

    const onClickVariants = (index) => {
        setStep(step + 1)

        if (index === question.correct ) {
            setCorrect(correct + 1)
        }
    }

    const question = questionList[step]
    return (
        <div>
            {
                step !== questionList.length ? <QuestionsItem  question={question} onClickVariants={onClickVariants}/> : <Result correct={correct}/>
            }
        </div>
    );
};

export default Questions;