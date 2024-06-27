import { useState } from "react";
import QUESTIONS from "../questions";

export default function Quiz() {
  const [userAns, setuserAns] = useState([]);
  const activeQusetionIndex = userAns.length;

  const handleSelectAnswer = (selectedAnswer) => {
    setuserAns((prevUserAns) => {
      return [...prevUserAns, selectedAnswer];
    });
  };

  return (
    <div id="quiz">
        <div id="question">
      <h2>{QUESTIONS[activeQusetionIndex].text}</h2>
      <ul id="answers">
        {QUESTIONS[activeQusetionIndex].answers.map((answer) => (
          <li key={answer} className="answer">
            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}
