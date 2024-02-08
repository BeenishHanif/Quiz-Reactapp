import { useState } from "react";
import "./index.css";
import QuizData from "./QuizData";

function App() {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [submission, setSubmission] = useState(false);
  const [showScore, setshowScore] = useState(false);

  const nextQuestion = () => {
    setSubmission(false);
    setcurrentQuestion((q) => q + 1);
  };

  const handleClick = (index) => {
    if (submission) {
      if (index === QuizData[currentQuestion].answer) return "correct";
      else {
        return "incorrect";
      }
    }
    if (!submission) {
      return "";
    }
  };

  const answerSubmission = (index) => {
    setSubmission(true);
    if (index === QuizData[currentQuestion].answer) {
      setScore((s) => s + 10);
    } else {
    }
  };

  const handleScore = () => {
    setshowScore(true);
  };
  return (
    <div className="container">
      <div className="quiz-subcontainer">
        <div className="question">
          <span>{QuizData[currentQuestion].question}</span>
        </div>
        <div className="options-container">
          {QuizData[currentQuestion].options.map((option, i) => (
            <button
              className={`options ${handleClick(i)}`}
              key={option}
              onClick={() => answerSubmission(i)}
              disabled={submission}
            >
              {option}
            </button>
          ))}
        </div>

        <button
          className="button-next"
          onClick={currentQuestion === 9 ? handleScore : nextQuestion}
          disabled={!submission}
        >
          {currentQuestion === 9 ? "SEE SCORE" : "NEXT"}
        </button>
      </div>
      {showScore && (
        <div
          className="overlay"
          style={{ display: showScore ? "flex" : "none" }}
        >
          <div className="score-banner">
            <p>Your score is: {score}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
