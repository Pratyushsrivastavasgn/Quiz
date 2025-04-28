import React from 'react';
import Button from './Button';
import { CheckCircle, XCircle, Home, RotateCcw, Trophy } from 'lucide-react';
import { QuizScore } from '../types';

interface ResultsProps {
  score: number;
  totalQuestions: number;
  onRestartQuiz: () => void;
  userName: string;
  previousScores: QuizScore[];
  onHome: () => void;
}

const Results: React.FC<ResultsProps> = ({ 
  score, 
  totalQuestions, 
  onRestartQuiz, 
  userName,
  previousScores,
  onHome
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getPerformanceMessage = () => {
    if (percentage >= 90) return `Excellent job, ${userName}! You're a quiz master!`;
    if (percentage >= 70) return `Great work, ${userName}! You know your stuff!`;
    if (percentage >= 50) return `Good effort, ${userName}! Room for improvement.`;
    return `Keep practicing, ${userName}! You'll do better next time.`;
  };

  const getPerformanceColor = () => {
    if (percentage >= 90) return "text-green-600 dark:text-green-400";
    if (percentage >= 70) return "text-blue-600 dark:text-blue-400";
    if (percentage >= 50) return "text-amber-600 dark:text-amber-400";
    return "text-red-600 dark:text-red-400";
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 animate-fadeIn">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">Quiz Completed!</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">Let's see how you did</p>
        
        <div className="inline-flex justify-center items-center mb-6">
          <div className="relative w-36 h-36">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle 
                className="text-gray-200 dark:text-gray-700" 
                strokeWidth="8" 
                stroke="currentColor" 
                fill="transparent" 
                r="42" 
                cx="50" 
                cy="50" 
              />
              <circle 
                className="text-blue-500 transition-all duration-1000 ease-out" 
                strokeWidth="8" 
                strokeLinecap="round" 
                stroke="currentColor" 
                fill="transparent" 
                r="42" 
                cx="50" 
                cy="50" 
                strokeDasharray={264}
                strokeDashoffset={264 - (percentage / 100) * 264}
                style={{ 
                  transform: 'rotate(-90deg)',
                  transformOrigin: 'center'
                }}
              />
            </svg>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">{percentage}%</span>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <p className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            You scored <span className="text-blue-600 dark:text-blue-400">{score}</span> out of <span className="text-blue-600 dark:text-blue-400">{totalQuestions}</span>
          </p>
          <p className={`text-lg ${getPerformanceColor()}`}>{getPerformanceMessage()}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <div className="flex items-center justify-center sm:justify-end flex-1 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <CheckCircle className="w-6 h-6 text-green-500 dark:text-green-400 mr-2" />
            <span className="text-green-800 dark:text-green-200 font-medium">Correct: {score}</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start flex-1 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <XCircle className="w-6 h-6 text-red-500 dark:text-red-400 mr-2" />
            <span className="text-red-800 dark:text-red-200 font-medium">Incorrect: {totalQuestions - score}</span>
          </div>
        </div>

        {previousScores.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Trophy className="w-5 h-5 text-amber-500" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Previous Scores</h3>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
              <div className="space-y-2">
                {previousScores.map((prevScore, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 dark:text-gray-300">{prevScore.playerName}</span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      {prevScore.score}/{prevScore.totalQuestions}
                      <span className="text-gray-500 dark:text-gray-400 ml-2">
                        ({formatDate(prevScore.date)})
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        <div className="flex justify-center gap-4">
          <Button onClick={onHome} variant="secondary" className="px-6">
            <Home className="w-4 h-4 mr-2" />
            Home
          </Button>
          <Button onClick={onRestartQuiz} variant="primary" className="px-6">
            <RotateCcw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;