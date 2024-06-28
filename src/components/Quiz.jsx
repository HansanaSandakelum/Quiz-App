import { useState ,useCallback } from "react";
import QUESTIONS from "../questions";
import quizIsCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";


export default function Quiz() {
  const [userAns, setUserAns] = useState([]);
  const activeQusetionIndex = userAns.length;

  const quizIsComplete = activeQusetionIndex === QUESTIONS.length;

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAns((prevUserAns) => {
      return [...prevUserAns, selectedAnswer];
    });
  }

  
  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizIsCompleteImg} alt="" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }
  const shuffledAnswers = [...QUESTIONS[activeQusetionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);
  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          timeout={10000}
          onTimeout={handleSelectAnswer}
        />
        <h2>{QUESTIONS[activeQusetionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
