import React, { useState } from 'react';
import Button from './Button';
import { Moon, Sun, Trophy, Brain } from 'lucide-react';
import { QuizScore } from '../types';

interface UserSetupProps {
  onStart: (name: string, darkMode: boolean) => void;
  previousScores: QuizScore[];
}

const UserSetup: React.FC<UserSetupProps> = ({ onStart, previousScores }) => {
  const [name, setName] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onStart(name.trim(), darkMode);
    }
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
    <div className="w-full max-w-md mx-auto glass-card rounded-xl shadow-lg shadow-blue-500/5 dark:shadow-blue-400/5 p-6 md:p-8 animate-fadeIn">
      <div className="flex items-center justify-center mb-6">
        <Brain className="w-12 h-12 text-blue-500 dark:text-blue-400" />
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            What's your name?
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50/50 dark:bg-gray-700/50 rounded-lg backdrop-blur-sm">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
            Theme
          </span>
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-white dark:bg-gray-600 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {darkMode ? (
              <Moon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
            ) : (
              <Sun className="w-5 h-5 text-amber-500" />
            )}
          </button>
        </div>

        {previousScores.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-200">Previous Scores</h3>
            </div>
            <div className="bg-gray-50/50 dark:bg-gray-700/50 rounded-lg p-4 backdrop-blur-sm">
              <div className="space-y-2">
                {previousScores.slice(0, 5).map((score, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 dark:text-gray-300">{score.playerName}</span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      {score.score}/{score.totalQuestions}
                      <span className="text-gray-500 dark:text-gray-400 ml-2">
                        ({formatDate(score.date)})
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <Button
          onClick={handleSubmit}
          fullWidth
          disabled={!name.trim()}
          className="shadow-lg shadow-blue-500/20 dark:shadow-blue-400/20"
        >
          Start Quiz
        </Button>
      </form>
    </div>
  );
};

export default UserSetup;