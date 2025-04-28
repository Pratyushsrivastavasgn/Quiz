export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface AnswerStatus {
  answered: boolean;
  isCorrect: boolean;
  selectedAnswer: string | null;
}

export interface UserData {
  name: string;
  darkMode: boolean;
}

export interface QuizScore {
  playerName: string;
  score: number;
  totalQuestions: number;
  date: string;
}