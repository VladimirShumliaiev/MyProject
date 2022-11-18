import React, {useState} from 'react';
import testQuizList from "./testQuizList";
import TestQuizItem from "./TestQuizItem";
import TestResult from "./TestResult";

const TestQuiz = () => {
    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)

    const onClickVariant = (e) => {
        setStep(step + 1)

        if (e === correct) {
            setCorrect(correct + 1)
        }
    }

    const quest = testQuizList[step]

    return (
        <div>
            {
                step !== testQuizList.length ? <TestQuizItem quest={quest} onClickVariant={onClickVariant}/> : <TestResult correct={correct}/>
            }
        </div>
    );
};

export default TestQuiz;