import React, { useState } from "react";
import bagImg from './images/bag.png'
import catImg from './images/cat.png'
import cotImg from './images/cot.png'
import hayImg from './images/hay.png'
import matImg from './images/mat.png'
import binImg from './images/bin.png'
import hatImg from './images/hat.png'
import mugImg from './images/mug.png'
import hogImg from './images/hog.png'
import bedImg from './images/bed.png'
import netImg from './images/net.png'
import mopImg from './images/mop.png'
import "./EngQuizGame.css";

export function EngQuizGame() {
  const questions = [
    {
      imageUrl: matImg,
      questionText: " m _ t",
      answerOptions: [
        { answerText: "A) a", isCorrect: true },
        { answerText: "B) e", isCorrect: false },
        { answerText: "C) i", isCorrect: false },
        { answerText: "D) o", isCorrect: false },
        { answerText: "E) u", isCorrect: false }
      ]
    },
    {
      imageUrl: bagImg,
      questionText: " b _ g",
      answerOptions: [
        { answerText: "A) a", isCorrect: true },
        { answerText: "B) e", isCorrect: false },
        { answerText: "C) i", isCorrect: false },
        { answerText: "D) o", isCorrect: false },
        { answerText: "E) u", isCorrect: false }
      ]
    },
    {
      imageUrl: netImg,
      questionText: " n _ t",
      answerOptions: [
        { answerText: "A) a", isCorrect: false },
        { answerText: "B) e", isCorrect: true },
        { answerText: "C) i", isCorrect: false },
        { answerText: "D) o", isCorrect: false },
        { answerText: "E) u", isCorrect: false }
      ]
    },
    {
      imageUrl: bedImg,
      questionText: " b _ d",
      answerOptions: [
        { answerText: "A) a", isCorrect: false },
        { answerText: "B) e", isCorrect: true },
        { answerText: "C) i", isCorrect: false },
        { answerText: "D) o", isCorrect: false },
        { answerText: "E) u", isCorrect: false }
      ]
    },
    {
      imageUrl: hogImg,
      questionText: " h _ g",
      answerOptions: [
        { answerText: "A) a", isCorrect: false },
        { answerText: "B) e", isCorrect: false },
        { answerText: "C) i", isCorrect: false },
        { answerText: "D) o", isCorrect: true },
        { answerText: "E) u", isCorrect: false }
      ]
    },
    {
      imageUrl: cotImg,
      questionText: " c _ t",
      answerOptions: [
        { answerText: "A) a", isCorrect: false },
        { answerText: "B) e", isCorrect: false },
        { answerText: "C) i", isCorrect: false },
        { answerText: "D) o", isCorrect: true },
        { answerText: "E) u", isCorrect: false }
      ]
    },
    {
      imageUrl: mopImg,
      questionText: " m _ p",
      answerOptions: [
        { answerText: "A) a", isCorrect: false },
        { answerText: "B) e", isCorrect: false },
        { answerText: "C) i", isCorrect: false },
        { answerText: "D) o", isCorrect: true },
        { answerText: "E) u", isCorrect: false }
      ]
    },
    {
      imageUrl: binImg,
      questionText: " b _ n",
      answerOptions: [
        { answerText: "A) a", isCorrect: false },
        { answerText: "B) e", isCorrect: false },
        { answerText: "C) i", isCorrect: true },
        { answerText: "D) o", isCorrect: false },
        { answerText: "E) u", isCorrect: false }
      ]
    },
    {
      imageUrl: catImg,
      questionText: " c _ t",
      answerOptions: [
        { answerText: "A) a", isCorrect: true },
        { answerText: "B) e", isCorrect: false },
        { answerText: "C) i", isCorrect: false },
        { answerText: "D) o", isCorrect: false },
        { answerText: "E) u", isCorrect: false }
      ]
    },
    {
      imageUrl: hatImg,
      questionText: " h _ t",
      answerOptions: [
        { answerText: "A) a", isCorrect: true },
        { answerText: "B) e", isCorrect: false },
        { answerText: "C) i", isCorrect: false },
        { answerText: "D) o", isCorrect: false },
        { answerText: "E) u", isCorrect: false }
      ]
    },
    {
      imageUrl: hayImg,
      questionText: " h _ y",
      answerOptions: [
        { answerText: "A) a", isCorrect: true },
        { answerText: "B) e", isCorrect: false },
        { answerText: "C) i", isCorrect: false },
        { answerText: "D) o", isCorrect: false },
        { answerText: "E) u", isCorrect: false }
      ]
    },
    {
      imageUrl: mugImg,
      questionText: " m _ g",
      answerOptions: [
        { answerText: "A) a", isCorrect: false },
        { answerText: "B) e", isCorrect: false },
        { answerText: "C) i", isCorrect: false },
        { answerText: "D) o", isCorrect: false },
        { answerText: "E) u", isCorrect: true }
      ]
    }

  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);
  const [isClick, setIsClick] = useState(false);

  const handleAnsButtonClick = (isCorrect) => {
    setIsClick(true);
    if (isCorrect === true) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    setIsClick(false);
  }

  const handleStatusColor = (isCorrect) => {
    if (!isCorrect) return "error";
    else if (isCorrect) return "success";
    else return "";
  };

  return (
    <div className="engquizgame">
      <div className="app">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <div>
            <div className="question-wrapper">
              <div className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question-text">
                  {questions[currentQuestion].questionText}
                </div>
                <div className="question-imgWrapper">
                  <img
                    className="question-img"
                    alt={questions[currentQuestion].questionText}
                    src={questions[currentQuestion].imageUrl}
                  />
                </div>
              </div>
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map((answerOption) => (
                  <button
                    className={isClick && handleStatusColor(answerOption.isCorrect)}
                    onClick={() => handleAnsButtonClick(answerOption.isCorrect)}
                  >
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
            </div>
            {isClick && <button className="text-center" onClick={handleNext}>Next</button>}
          </div>
        )}
      </div>
    </div>
  );
}