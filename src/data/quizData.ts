import { QuizQuestion } from '../types';

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars"
  },
  {
    id: 3,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: "Pacific Ocean"
  },
  {
    id: 4,
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    id: 5,
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
    correctAnswer: "Oxygen"
  },
  {
    id: 6,
    question: "In what year did World War II end?",
    options: ["1943", "1945", "1947", "1950"],
    correctAnswer: "1945"
  },
  {
    id: 7,
    question: "What is the capital of Japan?",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    correctAnswer: "Tokyo"
  },
  {
    id: 8,
    question: "Which is the largest planet in our solar system?",
    options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
    correctAnswer: "Jupiter"
  },
  {
    id: 9,
    question: "What is the chemical symbol for Gold?",
    options: ["Au", "Ag", "Fe", "Cu"],
    correctAnswer: "Au"
  },
  {
    id: 10,
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswer: "William Shakespeare"
  },
  {
    id: 11,
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correctAnswer: "Canberra"
  },
  {
    id: 12,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Korea", "Japan", "Thailand"],
    correctAnswer: "Japan"
  },
  {
    id: 13,
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    correctAnswer: "Diamond"
  },
  {
    id: 14,
    question: "Who invented the telephone?",
    options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
    correctAnswer: "Alexander Graham Bell"
  },
  {
    id: 15,
    question: "What is the largest mammal in the world?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale"
  },
  {
    id: 16,
    question: "Which continent is the largest by land area?",
    options: ["North America", "Africa", "Asia", "Europe"],
    correctAnswer: "Asia"
  },
  {
    id: 17,
    question: "What is the capital of Brazil?",
    options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
    correctAnswer: "Brasília"
  },
  {
    id: 18,
    question: "Who was the first person to walk on the moon?",
    options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
    correctAnswer: "Neil Armstrong"
  },
  {
    id: 19,
    question: "What is the main component of the Sun?",
    options: ["Oxygen", "Carbon", "Helium", "Hydrogen"],
    correctAnswer: "Hydrogen"
  },
  {
    id: 20,
    question: "Which is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correctAnswer: "2"
  }
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getQuizQuestions(count: number = 5): QuizQuestion[] {
  return shuffleArray(quizQuestions).slice(0, count);
}