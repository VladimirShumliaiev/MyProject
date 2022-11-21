import React, {useState} from 'react';
import testQuizList from "./testQuizList";
import TestQuizItem from "./TestQuizItem";
import TestResult from "./TestResult";

const TestQuiz = () => {
    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)

    const onClickVariants = (index) => {
        setStep(step + 1)

        if (index === correct) {
            setCorrect(correct + 1)
        }
    }

    const quest = testQuizList[step]

    return (
        <div>
            {
                step !== testQuizList.length ? <TestQuizItem onClickVariants={onClickVariants} quest={quest}/> : <TestResult correct={correct}/>
            }
        </div>
    );
};

export default TestQuiz;