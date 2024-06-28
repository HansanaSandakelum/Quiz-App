import { useState, useEffect } from "react";

export default function QuestionTimer(timeout, onTimeout) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    console.log("sfafaf");
    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout]);
  // setTimeout(onTimeout, timeout);

  useEffect(() => {
    console.log("tttt");
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return <progress id="question-time" value={remainingTime}/>;
}
