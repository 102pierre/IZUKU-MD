// Import necessary libraries and modules
const { cmd, getRandomInt } = require('../lib');

// Define quiz questions and answers
const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["A. London", "B. Berlin", "C. Paris"],
        correctAnswer: "C"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["A. Earth", "B. Mars", "C. Venus"],
        correctAnswer: "B"
    },
    {
        question: "The iPhone was made in what year?",
        options: ["A. 2004", "B. 2007", "C. 2012"],
        correctAnswer: "B"
    }
    // Add more questions here
];

let currentQuestionIndex = 0;
let userScore = 0;

// Create a command for starting the quiz
cmd({
    pattern: "startquiz",
    desc: "Start a quiz game.",
    category: "games",
    filename: __filename,
}, async (Void, citel) => {
    currentQuestionIndex = 0;
    userScore = 0;
    sendQuestion(citel);
});

// Function to send the next question
function sendQuestion(citel) {
    if (currentQuestionIndex < quizQuestions.length) {
        const questionObj = quizQuestions[currentQuestionIndex];
        const questionMessage = `${questionObj.question}\n${questionObj.options.join("\n")}`;
        citel.reply(questionMessage);
    } else {
        citel.reply(`Quiz completed! Your score: ${userScore}/${quizQuestions.length}`);
    }
}

// Create a command for answering quiz questions
cmd({
    pattern: "answer",
    desc: "Answer a quiz question (e.g., !answer A).",
    category: "games",
    filename: __filename,
}, async (Void, citel, text) => {
    const userAnswer = text.trim().toUpperCase();
    const currentQuestion = quizQuestions[currentQuestionIndex];

    if (currentQuestion && userAnswer === currentQuestion.correctAnswer) {
        userScore++;
    }

    currentQuestionIndex++;
    sendQuestion(citel);
});
//======================================================================================================
const flagPairs = [
  { flag: "🇺🇸", country: "United States" },
  { flag: "🇬🇧", country: "United Kingdom" },
  { flag: "🇫🇷", country: "France" },
  { flag: "🇩🇪", country: "Germany" },
  { flag: "🇨🇦", country: "Canada" },
  { flag: "🇦🇺", country: "Australia" },
  { flag: "🇯🇵", country: "Japan" },
  { flag: "🇮🇳", country: "India" },
  { flag: "🇮🇹", country: "Italy" },
  { flag: "🇪🇸", country: "Spain" },
  { flag: "🇷🇺", country: "Russia" },
  { flag: "🇧🇷", country: "Brazil" },
  { flag: "🇨🇳", country: "China" },
  { flag: "🇲🇽", country: "Mexico" },
  { flag: "🇿🇦", country: "South Africa" },
  { flag: "🇰🇷", country: "South Korea" },
  { flag: "🇸🇦", country: "Saudi Arabia" },
  { flag: "🇸🇬", country: "Singapore" },
  { flag: "🇸🇪", country: "Sweden" },
  { flag: "🇨🇭", country: "Switzerland" },
  { flag: "🇦🇷", country: "Argentina" },
  { flag: "🇦🇹", country: "Austria" },
  { flag: "🇧🇪", country: "Belgium" },
  { flag: "🇨🇱", country: "Chile" },
  { flag: "🇨🇴", country: "Colombia" },
  { flag: "🇨🇿", country: "Czech Republic" },
  { flag: "🇩🇰", country: "Denmark" },
  { flag: "🇪🇬", country: "Egypt" },
  { flag: "🇫🇮", country: "Finland" },
  { flag: "🇬🇷", country: "Greece" },
  { flag: "🇭🇺", country: "Hungary" },
  { flag: "🇮🇩", country: "Indonesia" },
  { flag: "🇮🇪", country: "Ireland" },
  { flag: "🇮🇱", country: "Israel" },
  { flag: "🇯🇴", country: "Jordan" },
  { flag: "🇰🇿", country: "Kazakhstan" },
  { flag: "🇱🇧", country: "Lebanon" },
  { flag: "🇲🇾", country: "Malaysia" },
  { flag: "🇲🇻", country: "Maldives" },
  { flag: "🇳🇱", country: "Netherlands" },
  { flag: "🇳🇿", country: "New Zealand" },
  { flag: "🇳🇴", country: "Norway" },
  { flag: "🇵🇰", country: "Pakistan" },
  { flag: "🇵🇱", country: "Poland" },
  { flag: "🇵🇹", country: "Portugal" },
  { flag: "🇶🇦", country: "Qatar" },
  { flag: "🇷🇴", country: "Romania" },
  { flag: "🇷🇸", country: "Serbia" },
];

let currentFlagIndex = 0;
let score = 0;

cmd(
  {
    pattern: "nextflag",
    desc: "Display the next flag.",
    category: "game",
  },
  (Void, citel) => {
    if (currentFlagIndex >= flagPairs.length) {
      currentFlagIndex = 0;
    }

    const flagPair = flagPairs[currentFlagIndex];
    const flagWithBorder = addFancyBorder(flagPair.flag);
    citel.reply(`Guess the country of this flag: ${flagWithBorder}`);
  }
);

cmd(
  {
    pattern: "guesscountry",
    desc: "Guess the country of the current flag.",
    category: "game",
  },
  (match, citel) => {
    const guessedCountry = match[1].toLowerCase();
    const flagPair = flagPairs[currentFlagIndex];
    const correctCountry = flagPair.country.toLowerCase();

    if (guessedCountry === correctCountry) {
      score++;
      citel.reply(`Congratulations! That's correct. Your score is ${score}.`);

      currentFlagIndex++;
      if (currentFlagIndex >= flagPairs.length) {
        citel.reply("You've guessed all the flags. Game over!");
      } else {
        const nextFlagPair = flagPairs[currentFlagIndex];
        const flagWithBorder = addFancyBorder(nextFlagPair.flag);
        citel.reply(`Guess the country of this flag: ${flagWithBorder}`);
      }
    } else {
      citel.reply(`Oops! That's incorrect. The correct answer is ${flagPair.country}. Your score is ${score}.`);
    }
  }
);

function addFancyBorder(flag) {
  const border = "|========|";
  return `${border}\n${flag}\n${border}`;
}
