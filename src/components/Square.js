import { useState, useEffect } from "react";
import questions from "../questions.js";
import "./Square.css";

function Square({ value, type }) {
  const [showQuestion, setShowQuestion] = useState(false);
  const [currQuestion, setCurrQuestion] = useState("");

  function onClick() {
    setShowQuestion(!showQuestion);

    if (showQuestion === false) {
      setCurrQuestion(questions[type][value].pop());
    }
  }

  useEffect(() => {
    setCurrQuestion(questions[type][value].pop());
  }, "");

  return (
    <section
      className={`square ${showQuestion ? "highlight" : ""} ${
        currQuestion ? "" : "empty"
      }`}
      onClick={currQuestion ? onClick : null}
    >
      {!showQuestion && <h3>{value}</h3>}
      {showQuestion && (
        <>
          <p>{currQuestion}</p>
        </>
      )}
    </section>
  );
}

export default Square;
