import React from 'react';

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentQuestion, totalQuestions }) => {
  const progress = (currentQuestion / totalQuestions) * 100;
  
  return (
    <div className="w-full max-w-2xl mx-auto mb-6">
      <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
        <span>Question {currentQuestion} of {totalQuestions}</span>
        <span>{Math.round(progress)}% Complete</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
        <div 
          className="bg-blue-500 h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;