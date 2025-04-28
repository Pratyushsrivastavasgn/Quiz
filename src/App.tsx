import React, { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import UserSetup from './components/UserSetup';
import { getQuizQuestions } from './data/quizData';
import { UserData, QuizScore } from './types';
import { Brain } from 'lucide-react';

function App() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [questions] = useState(() => getQuizQuestions(10));
  const [scores, setScores] = useState<QuizScore[]>(() => {
    const savedScores = localStorage.getItem('quizScores');
    return savedScores ? JSON.parse(savedScores) : [];
  });

  const handleStart = (name: string, darkMode: boolean) => {
    setUserData({ name, darkMode });
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleNewScore = (score: QuizScore) => {
    const newScores = [score, ...scores].slice(0, 10);
    setScores(newScores);
    localStorage.setItem('quizScores', JSON.stringify(newScores));
  };

  const handleHome = () => {
    setUserData(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-8 px-4 theme-transition">
      <div className="quiz-container">
        <header className="text-center mb-8 theme-transition">
          <div className="flex items-center justify-center mb-4">
            <Brain className="w-12 h-12 text-blue-500 dark:text-blue-400 transform hover:scale-110 transition-transform duration-300" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-gradient mb-2">
            Interactive Quiz
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 theme-transition">
            Test your knowledge with these fun questions!
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium theme-transition">
            Created by <span className="text-blue-600 dark:text-blue-400">VIRAT GANDHI</span>
          </p>
        </header>
        
        {userData ? (
          <Quiz 
            questions={questions} 
            userName={userData.name}
            onNewScore={handleNewScore}
            previousScores={scores}
            onHome={handleHome}
          />
        ) : (
          <UserSetup onStart={handleStart} previousScores={scores} />
        )}
      </div>
    </div>
  );
}

export default App;