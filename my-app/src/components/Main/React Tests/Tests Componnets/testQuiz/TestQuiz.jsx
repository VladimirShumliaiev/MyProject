import React, {useState} from 'react';
import testQuizList from "./testQuizList";
import TestQuizItem from "./TestQuizItem";
import TestResult from "./TestResult";

const TestQuiz = () => {
    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);

    const onClickVariants = (index) => {
        setStep(step + 1)

        if (index === question.correct) {
            setCorrect( correct + 1)
        }

    }

    const question = testQuizList[step]

    console.log('step',step, 'correct',correct);
    return (
        <div>
            {
                step !== testQuizList.length ? <TestQuizItem question={question} onClickVariants={onClickVariants}/> :
                    <TestResult correct={correct}/>
            }
        </div>
    );
};

export default TestQuiz;