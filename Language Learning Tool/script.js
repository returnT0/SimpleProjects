// Define your vocabulary data as an array of objects
import { vocabulary } from './vocabulary.js';

// Select elements from the DOM
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");

// Initialize variables
let currentQuestionIndex = 0;
let score = 0;

// Shuffle the vocabulary array to randomize questions (Fisher-Yates Shuffle Algorithm)
const shuffledVocabulary = shuffleArray(vocabulary);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to load the next question
function loadQuestion() {
    if (currentQuestionIndex >= shuffledVocabulary.length) {
        endQuiz();
        return;
    }

    const currentQuestion = shuffledVocabulary[currentQuestionIndex];
    questionElement.textContent = `Translate the word: ${currentQuestion.question}`;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(optionButton);
    });
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
    const currentQuestion = shuffledVocabulary[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
        feedbackElement.textContent = "Correct!";
    } else {
        feedbackElement.textContent = `Wrong. The correct answer is: ${currentQuestion.correctAnswer}`;
    }

    setTimeout(nextQuestion, 1000); // Automatically move to the next question after 2 seconds
}

// Function to load the next question
function nextQuestion() {
    currentQuestionIndex++;
    feedbackElement.textContent = "";

    loadQuestion();
}

// Function to end the quiz and display the final score
function endQuiz() {
    questionElement.textContent = `Quiz completed! Your score: ${score}/${shuffledVocabulary.length}`;
    optionsElement.innerHTML = "";
}

// Start the quiz by loading the first question
loadQuestion();
