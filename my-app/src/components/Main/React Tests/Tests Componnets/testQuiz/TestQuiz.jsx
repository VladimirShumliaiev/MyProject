import React, {useState} from 'react';
import testQuizList from "./testQuizList";
import questionsList from "../../../React Lessons/React Lessons Components/Lessons/Seventh Lesson/questionsList";
import TestQuizItem from "./TestQuizItem";
import TestResult from "./TestResult";

const TestQuiz = () => {
    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)

    const onClickVariants = (i) => {
        setStep(step + 1)

        if (i === question.correct) {
            setCorrect(correct + 1)
        }
    }

    const question = testQuizList[step]

    return (
        <div>
            {
                step !== questionsList.length ? <TestQuizItem question={question} onClickVariants={onClickVariants}/> : <TestResult correct={correct}/>
            }
        </div>
    );
};

export default TestQuiz;