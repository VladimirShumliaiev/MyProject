import React, {useState} from 'react';
import TestQuizItem from "./TestQuizItem";
import testQuizList from "./testQuizList";
import TestResult from "./TestResult";

const TestQuiz = () => {
    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)

    const onClickVariants = (e) => {
        setStep(step + 1)
        if (e === question.correct) {
            setCorrect(correct  + 1)
        }
    }

    const question = testQuizList[step]
    return (
        <div>
            {
                step !== testQuizList.length ? <TestQuizItem question={question} onClickVariants={onClickVariants}/> : <TestResult correct={correct}/>
            }

        </div>
    );
};

export default TestQuiz;