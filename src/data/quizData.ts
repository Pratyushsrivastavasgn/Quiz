import { QuizQuestion } from '../types';

const quizQuestions: QuizQuestion[] = [
  // CSS Questions
  {
    id: 1,
    question: "What is the default value of the `position` property in CSS?",
    options: ["absolute", "fixed", "relative", "static"],
    correctAnswer: "static"
  },
  {
    id: 2,
    question: "Which property is used to change the text color in CSS?",
    options: ["text-color", "color", "font-color", "text-style"],
    correctAnswer: "color"
  },
  {
    id: 3,
    question: "How do you center an element horizontally using CSS?",
    options: ["margin: auto;", "text-align: center;", "position: center;", "align: center;"],
    correctAnswer: "margin: auto;"
  },
  {
    id: 4,
    question: "What is the purpose of the `z-index` property?",
    options: ["To change the background color of an element", "To set the stacking order of elements", "To position elements vertically", "To adjust text size"],
    correctAnswer: "To set the stacking order of elements"
  },
  {
    id: 5,
    question: "Which CSS property is used to change the font of an element?",
    options: ["font-family", "text-font", "font-size", "font-style"],
    correctAnswer: "font-family"
  },
  {
    id: 6,
    question: "Which CSS property is used to apply shadow to text?",
    options: ["text-shadow", "box-shadow", "shadow", "shadow-text"],
    correctAnswer: "text-shadow"
  },
  {
    id: 7,
    question: "How do you create a responsive design in CSS?",
    options: ["By using @font-face", "By using position: absolute", "By using media queries", "By using z-index"],
    correctAnswer: "By using media queries"
  },
  {
    id: 8,
    question: "Which CSS property is used to create a multi-column layout?",
    options: ["columns", "multi-column", "column-count", "column-layout"],
    correctAnswer: "column-count"
  },
  {
    id: 9,
    question: "Which of the following properties does Flexbox use to align items?",
    options: ["justify-content", "align-items", "align-self", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    id: 10,
    question: "What does the box-sizing: border-box; CSS property do?",
    options: ["Includes padding and border in the element’s total width and height", "Removes the border of the element", "Changes the border style to box shape", "Changes the size of the box to its content"],
    correctAnswer: "Includes padding and border in the element’s total width and height"
  },

  // Bootstrap Questions
  {
    id: 11,
    question: "Which class in Bootstrap is used to create a container that spans the entire width of the page?",
    options: [".container", ".container-fluid", ".fluid-container", ".wide-container"],
    correctAnswer: ".container-fluid"
  },
  {
    id: 12,
    question: "Which Bootstrap class is used to align text to the center?",
    options: [".text-center", ".align-center", ".center-text", ".text-align-center"],
    correctAnswer: ".text-center"
  },
  {
    id: 13,
    question: "Which grid class in Bootstrap defines a 12-column grid?",
    options: [".row", ".grid-12", ".col-12", ".col-md-12"],
    correctAnswer: ".col-12"
  },
  {
    id: 14,
    question: "How do you make a button look primary in Bootstrap?",
    options: [".btn-primary", ".btn-success", ".primary-btn", ".btn-standard"],
    correctAnswer: ".btn-primary"
  },
  {
    id: 15,
    question: "Which class in Bootstrap helps in creating a collapsible navigation bar?",
    options: [".navbar-collapse", ".collapse-navbar", ".navbar-expand", ".nav-collapse"],
    correctAnswer: ".navbar-collapse"
  },
  {
    id: 16,
    question: "Which class would you use to make a table responsive in Bootstrap?",
    options: [".table-responsive", ".table-fluent", ".table-overflow", ".table-fixed"],
    correctAnswer: ".table-responsive"
  },
  {
    id: 17,
    question: "Which class in Bootstrap is used for a horizontal line?",
    options: [".divider", ".hr-line", ".hr", ".border-top"],
    correctAnswer: ".hr"
  },
  {
    id: 18,
    question: "How do you define a column in Bootstrap’s grid system?",
    options: [".col-md", ".col-lg", ".col", ".col-xxl"],
    correctAnswer: ".col-md"
  },
  {
    id: 19,
    question: "Which class in Bootstrap helps to create rounded corners on elements?",
    options: [".rounded", ".round-corners", ".corner-radius", ".radius"],
    correctAnswer: ".rounded"
  },

  // JavaScript Questions
  {
    id: 20,
    question: "Which of the following is a correct way to define a function in JavaScript?",
    options: ["function myFunction[]{}", "function myFunction(){}", "function = myFunction(){}", "function: myFunction(){}"],
    correctAnswer: "function myFunction(){}"
  },
  {
    id: 21,
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "/* */", "#", "Both A and B"],
    correctAnswer: "Both A and B"
  },
  {
    id: 22,
    question: "What does NaN represent in JavaScript?",
    options: ["A function", "An invalid number", "A string type", "A special operator"],
    correctAnswer: "An invalid number"
  },
  {
    id: 23,
    question: "Which of the following is used to convert a string to a number in JavaScript?",
    options: ["parseInt()", "toString()", "convertToNumber()", "parseFloat()"],
    correctAnswer: "parseInt()"
  },
  {
    id: 24,
    question: "What will the following code output: console.log(2 + '2');?",
    options: ["4", "22", "NaN", "undefined"],
    correctAnswer: "22"
  },

  // Cloud - AWS Questions
  {
    id: 25,
    question: "What does AWS stand for?",
    options: ["Automated Web Services", "Amazon Web Services", "Application Web Services", "Advanced Web Solutions"],
    correctAnswer: "Amazon Web Services"
  },
  {
    id: 26,
    question: "Which AWS service is used for computing in the cloud?",
    options: ["EC2", "S3", "Lambda", "RDS"],
    correctAnswer: "EC2"
  },
  {
    id: 27,
    question: "Which AWS service is used to store files in the cloud?",
    options: ["EC2", "RDS", "S3", "VPC"],
    correctAnswer: "S3"
  },
  {
    id: 28,
    question: "Which AWS service is designed for managing databases?",
    options: ["EC2", "RDS", "Lambda", "S3"],
    correctAnswer: "RDS"
  },
  {
    id: 29,
    question: "What is the purpose of AWS Lambda?",
    options: ["To run virtual machines in the cloud", "To provide serverless computing", "To manage DNS", "To monitor network traffic"],
    correctAnswer: "To provide serverless computing"
  },

  // General Questions
  {
    id: 30,
    question: "What does HTTP stand for?",
    options: ["HyperText Transfer Protocol", "HyperText Transmission Protocol", "Hyper Transfer Text Protocol", "High Transfer Text Protocol"],
    correctAnswer: "HyperText Transfer Protocol"
  },
  {
    id: 31,
    question: "Which of the following is a type of database?",
    options: ["MySQL", "Linux", "MongoDB", "Both A and C"],
    correctAnswer: "Both A and C"
  },
  {
    id: 32,
    question: "What is the purpose of a router in networking?",
    options: ["To connect computers within a network", "To connect different networks together", "To manage website traffic", "To host websites"],
    correctAnswer: "To connect different networks together"
  },
  {
    id: 33,
    question: "Which of the following is not a programming language?",
    options: ["Python", "Java", "HTML", "SQL"],
    correctAnswer: "HTML"
  },
  {
    id: 34,
    question: "What is Git used for in software development?",
    options: ["A text editor", "A version control system", "A compiler", "A build tool"],
    correctAnswer: "A version control system"
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
