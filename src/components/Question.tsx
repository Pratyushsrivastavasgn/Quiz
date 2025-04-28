import React, { useState } from 'react';
import { AnswerStatus, QuizQuestion } from '../types';
import Button from './Button';

interface QuestionProps {
  question: QuizQuestion;
  onAnswerSubmit: (answer: string) => void;
  answerStatus: AnswerStatus | null;
  isLastQuestion: boolean;
}

const Question: React.FC<QuestionProps> = ({
  question,
  onAnswerSubmit,
  answerStatus,
  isLastQuestion,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    if (!answerStatus?.answered) {
      setSelectedOption(option);
    }
  };

  const handleSubmit = () => {
    if (selectedOption) {
      onAnswerSubmit(selectedOption);
    }
  };

  const getOptionClasses = (option: string) => {
    const baseClasses = 'option-card glass-card';
    
    if (!answerStatus?.answered) {
      return `${baseClasses} ${
        selectedOption === option 
          ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-900/20' 
          : 'border-gray-200 dark:border-gray-600'
      }`;
    }
    
    if (option === question.correctAnswer) {
      return `${baseClasses} border-green-500 bg-green-50/50 dark:bg-green-900/20`;
    }
    
    if (option === selectedOption && selectedOption !== question.correctAnswer) {
      return `${baseClasses} border-red-500 bg-red-50/50 dark:bg-red-900/20`;
    }
    
    return `${baseClasses} border-gray-200 dark:border-gray-600 opacity-70`;
  };

  return (
    <div className="w-full max-w-2xl mx-auto glass-card rounded-xl shadow-lg shadow-blue-500/5 dark:shadow-blue-400/5 p-6 md:p-8 animate-fadeIn">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-4">{question.question}</h2>
      
      <div className="space-y-3 my-6">
        {question.options.map((option, index) => (
          <div
            key={index}
            className={getOptionClasses(option)}
            onClick={() => handleOptionSelect(option)}
          >
            <div className="flex items-center">
              <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center transition-colors duration-200 ${
                selectedOption === option 
                  ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400' 
                  : 'border-gray-300 dark:border-gray-500'
              }`}>
                {selectedOption === option && (
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                )}
              </div>
              <span className="text-gray-800 dark:text-gray-200">{option}</span>
            </div>
          </div>
        ))}
      </div>

      {answerStatus?.answered ? (
        <div className={`p-4 rounded-lg mb-6 ${
          answerStatus.isCorrect 
            ? 'bg-green-50/50 dark:bg-green-900/20 text-green-800 dark:text-green-200' 
            : 'bg-red-50/50 dark:bg-red-900/20 text-red-800 dark:text-red-200'
        }`}>
          <p className="font-medium">
            {answerStatus.isCorrect 
              ? 'Correct! Great job!' 
              : `Incorrect. The correct answer is ${question.correctAnswer}.`}
          </p>
        </div>
      ) : null}

      <div className="flex justify-end">
        <Button 
          onClick={handleSubmit} 
          disabled={!selectedOption || answerStatus?.answered}
          variant={isLastQuestion ? 'success' : 'primary'}
          className="shadow-lg shadow-blue-500/20 dark:shadow-blue-400/20"
        >
          {answerStatus?.answered 
            ? (isLastQuestion ? 'See Results' : 'Next Question') 
            : 'Submit Answer'}
        </Button>
      </div>
    </div>
  );
};

export default Question;