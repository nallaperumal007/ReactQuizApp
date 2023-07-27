import React, { useState } from 'react';
import './App.css';
export default function App() {
	const questions = [
		{
			questionText: 'What is ReactJS?',
			answerOptions: [
				{ answerText: 'Serverside Framework', isCorrect: false },
				{ answerText: 'User Interface Framework', isCorrect: true },
				{ answerText: 'back end framework', isCorrect: false},
				{ answerText: 'none', isCorrect: false },
			],
		},
		{
			questionText: 'Who created React.js?  ',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Jordan walke', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],

		},
		{
			questionText: 'In which language is React.js written?      ',
			answerOptions: [
				{ answerText: 'Javascript', isCorrect: true },
				{ answerText: 'Java', isCorrect: false },
				{ answerText: 'Python', isCorrect: false },
				{ answerText: 'C#', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is used in React.js to increase performance?',
			answerOptions: [
				{ answerText: 'Orginal Dom', isCorrect: false },
				{ answerText: 'Bom', isCorrect: false },
				{ answerText: 'None', isCorrect: false },
				{ answerText: 'Virtual Dom', isCorrect: true },
			],
		},
	];
  

  const[currentQuestion,setCurrentQuestion]=useState(0);
  const[showScore,setShowScore]=useState(false);
  const[score,setScore]=useState(0);

  const handleAnswerOptionClick=(isCorrect)=>{
    if(isCorrect)
    {
      setScore(score+1);
    }
    const nextQuestion=currentQuestion+1;
    if(nextQuestion<questions.length){
       setCurrentQuestion(nextQuestion);
    }
    else{
      setShowScore(true);
    }
  };


	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question{currentQuestion+1} </span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOptions)=>
            <button onClick={()=>handleAnswerOptionClick(answerOptions.isCorrect)}>
             {answerOptions.answerText}</button>
            )}

          
					</div>
				</>
			)}
		</div>
	);
}
