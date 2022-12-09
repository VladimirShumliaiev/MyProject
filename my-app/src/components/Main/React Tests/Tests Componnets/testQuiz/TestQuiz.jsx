import React, {useState} from 'react';
import TestQuizItem from "./TestQuizItem";
import testQuizList from "./testQuizList";
import TestResult from "./TestResult";

const TestQuiz = () => {
    const [step, setStep] = useState(0)
    const [correctVariants, setCorrectVariants] = useState(0)

    const onClickVariants = (index) => {
        setStep(step + 1)

        if (index === question.correct) {
            setCorrectVariants(correctVariants +1)
        }
    }

    const question = testQuizList[step]

    return (
        <div>
            {
                step !== testQuizList.length ?
                    <TestQuizItem onClickVariants={onClickVariants} question={question}/> :
                    <TestResult correctVariants={correctVariants}/>
            }
        </div>
    );
};

export default TestQuiz;
