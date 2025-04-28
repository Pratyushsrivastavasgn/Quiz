import React, { useState, useEffect } from 'react';
import { QuizQuestion, AnswerStatus, QuizScore } from '../types';
import Question from './Question';
import ProgressBar from './ProgressBar';
import Results from './Results';
import { getQuizQuestions } from '../data/quizData';

interface QuizProps {
  questions: QuizQuestion[];
  userName: string;
  onNewScore: (score: QuizScore) => void;
  previousScores: QuizScore[];
  onHome: () => void;
}

const Quiz: React.FC<QuizProps> = ({ 
  questions: initialQuestions, 
  userName, 
  onNewScore,
  previousScores,
  onHome
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [answerStatus, setAnswerStatus] = useState<AnswerStatus | null>(null);
  const [animation, setAnimation] = useState<'fadeIn' | 'fadeOut'>('fadeIn');
  const [questions, setQuestions] = useState(initialQuestions);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleAnswerSubmit = (answer: string) => {
    const isCorrect = answer === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
    
    setAnswerStatus({
      answered: true,
      isCorrect,
      selectedAnswer: answer
    });
  };

  const moveToNextQuestion = () => {
    setAnimation('fadeOut');
    
    setTimeout(() => {
      if (isLastQuestion) {
        setQuizComplete(true);
        onNewScore({
          playerName: userName,
          score,
          totalQuestions: questions.length,
          date: new Date().toISOString()
        });
      } else {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        setAnswerStatus(null);
      }
      setAnimation('fadeIn');
    }, 300);
  };

  const restartQuiz = () => {
    setAnimation('fadeOut');
    setTimeout(() => {
      setQuestions(getQuizQuestions(10));
      setCurrentQuestionIndex(0);
      setScore(0);
      setQuizComplete(false);
      setAnswerStatus(null);
      setAnimation('fadeIn');
    }, 300);
  };

  useEffect(() => {
    if (answerStatus?.answered) {
      const timer = setTimeout(() => {
        moveToNextQuestion();
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [answerStatus]);

  if (quizComplete) {
    return (
      <Results 
        score={score} 
        totalQuestions={questions.length} 
        onRestartQuiz={restartQuiz}
        userName={userName}
        previousScores={previousScores}
        onHome={onHome}
      />
    );
  }

  return (
    <div className={`transition-opacity duration-300 ${animation === 'fadeOut' ? 'opacity-0' : 'opacity-100'}`}>
      <ProgressBar 
        currentQuestion={currentQuestionIndex + 1} 
        totalQuestions={questions.length} 
      />
      
      <Question 
        question={currentQuestion}
        onAnswerSubmit={handleAnswerSubmit}
        answerStatus={answerStatus}
        isLastQuestion={isLastQuestion}
      />
    </div>
  );
};

export default Quiz;