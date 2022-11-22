import React, {useState} from 'react';
import testQuizList from "./testQuizList";
import TestQuizItem from "./TestQuizItem";
import TestResult from "./TestResult";

const TestQuiz = () => {
    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)

    const onClickVariants = (index) => {
        setStep(step + 1)

        if (index === questions.correct) {
            setCorrect(correct + 1)
        }
    }
    const questions = testQuizList[step]
    return (
        <div>
            {
                step !== testQuizList.length ? <TestQuizItem question={questions} onClickVariants={onClickVariants}/> : <TestResult correct={correct}/>
            }
        </div>
    );
};

export default TestQuiz;