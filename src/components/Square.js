import { useState } from 'react'
import questions from '../questions.js'
import './Square.css'

function Square({value, type}) {
  const [showQuestion, setShowQuestion] = useState(false);

  function onClick() {
    setShowQuestion(!showQuestion);
  }

  return (
    <section className={`square ${showQuestion ? 'highlight' : ''}`} onClick={onClick}>
      {!showQuestion &&
        <h3>{value}</h3>
      }
      {showQuestion &&
      <>
        <p>{questions[type][value][Math.floor(Math.random()*questions[type][value].length)]}</p>
      </>
      }
    </section>
  )
}

export default Square;