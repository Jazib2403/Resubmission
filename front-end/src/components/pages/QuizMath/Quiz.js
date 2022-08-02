import React, { useState } from 'react';

const Quiz = () => {
     const questions = [
		{
			questionText: 'If a girl has 1109 cars and her friend has 560 cars, how many cars in total do they have?',
			answerOptions: [
				{ answerText: '1,669 cars', isCorrect: true},
				{ answerText: '225 cars', isCorrect: false },
				{ answerText: '7,780', isCorrect: false },
				{ answerText: '10,900', isCorrect: false },
			],
		},
		{
			questionText: 'What number should be added to 89 to get 145 as a sum?',
			answerOptions: [
				{ answerText: '12', isCorrect: false },
				{ answerText: '89', isCorrect: true },
				{ answerText: '70', isCorrect: false },
				{ answerText: '2', isCorrect: false },
			],
		},
		{
			questionText: 'What is 707 + 1,818 =',
			answerOptions: [
				{ answerText: '2525', isCorrect: true },
				{ answerText: '118', isCorrect: false },
				{ answerText: '996', isCorrect: false },
				{ answerText: '3335', isCorrect: false },
			],
		},
		{
			questionText: 'What is 2.7 + 3.014?',
			answerOptions: [
				{ answerText: '5.714', isCorrect: false },
				{ answerText: '2.567', isCorrect: false },
				{ answerText: '5.269', isCorrect: false },
				{ answerText: '7.139', isCorrect: true },
			],
		},
		{
			questionText: 'How much is 45% of 460?',
			answerOptions: [
				{ answerText: '323', isCorrect: true },
				{ answerText: '554', isCorrect: false },
				{ answerText: '207', isCorrect: false },
				{ answerText: '443', isCorrect: false },
			],
		},
		{
			questionText: 'This sum involves fractions. What is 1/4 + 1/5 + 1/10?',
			answerOptions: [
				{ answerText: '5.714', isCorrect: true },
				{ answerText: '2.567', isCorrect: false },
				{ answerText: '5.269', isCorrect: false },
				{ answerText: '7.139', isCorrect: false},
			],
		},
		{
			questionText: 'Now try: 50 + (36 ÷ 6)',
			answerOptions: [
				{ answerText: '56', isCorrect: true },
				{ answerText: '76', isCorrect: false },
				{ answerText: '96', isCorrect: false },
				{ answerText: '86', isCorrect: false},
			],
		},
		{
			questionText: 'What is 2.7 + 3.014?',
			answerOptions: [
				{ answerText: '5.714', isCorrect: true },
				{ answerText: '2.567', isCorrect: false },
				{ answerText: '5.269', isCorrect: false },
				{ answerText: '7.139', isCorrect: false },
			],
		},
		{
			questionText: 'How much is 505 ÷ 1?',
			answerOptions: [
				{ answerText: '505', isCorrect: true },
				{ answerText: '879', isCorrect: false },
				{ answerText: '320', isCorrect: false },
				{ answerText: '448', isCorrect: false },
			],
		},
		{
			questionText: 'More fractions. What is 4/6 x 3/5? And no, you are not allowed to Google How to multiply fractions. Do it from memory.',
			answerOptions: [
				{ answerText: '7/5', isCorrect: false },
				{ answerText: '3/2', isCorrect: false },
				{ answerText: '6/5', isCorrect: false },
				{ answerText: '2/5', isCorrect: true },
			],
		},
	];
	
	  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
		const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	
	
     
    
    return (
       	<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}. Remember Rome was not built in a day! 
				</div>
) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='questions'>{questions[currentQuestion].questionText}</div>
					</div>
                       <div className='answers'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
						
					</div>
				</>
			)}
		</div>                        
    );
}
export default Quiz;
