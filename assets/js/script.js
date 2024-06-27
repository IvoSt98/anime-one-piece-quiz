/** Questions, options and asnwers array
 */
const quizQuestions = [{
        question: "Who promised that they would never lose another fight until they defeated a certain someone?",
        choices: ["Luffy", "Sanji", "Zoro", "Usopp"],
        answer: "Zoro"
    },
    {
        question: "How did Luffy get the scar under his eye?",
        choices: ["Atacked by bandits", "Fight with animals", "Himself", "Fight with another villager"],
        answer: "Himself"
    },
    {
        question: "Who was the first member of the SH crew to try and recruit a new member besides Luffy?",
        choices: ["Nami", "Sanji", "Zoro", "Usopp"],
        answer: "Nami"
    },
    {
        question: "What made Crocodile join Luffy's 'Rescue Ace Crew'?",
        choices: ["Luffy", "Jinbei", "Ace", "Ivancov"],
        answer: "Ace"
    },
    {
        question: "Who was the first marine Admiral to be shown in the series?",
        choices: ["Akainu", "Kizaru", "Aokiji", "Sengoku"],
        answer: "Aokiji"
    },
    {
        question: "Who gave Shanks the scar on his eye?",
        choices: ["Dragon", "Marshall D", "Akainu", "Himself"],
        answer: "Marshall D"
    },
    {
        question: "How many crewmates did Luffy say he wanted at the beginning of the series?",
        choices: ["9", "13", "10", "15"],
        answer: "10"
    },
    {
        question: "Who said- Zoro should cut diamond next?",
        choices: ["Luffy", "Mihawk", "Kuina", "Daz Bones"],
        answer: "Kuina"
    },
    {
        question: "Who was the first recruit of the SH crew?",
        choices: ["Nami", "Sanji", "Zoro", "Usopp"],
        answer: "Zoro"
    },
    {
        question: "How many confirmed D clan members are there?",
        choices: ["8", "14", "11", "18"],
        answer: "14"
    },
];

/**  Calling the Dom Elements by their ids
 */
let instructionsArea = document.getElementById('instructionsArea');
let playButton = document.getElementById('playButton');
let questionBox = document.getElementById('questionBox');
let questionElement = document.getElementById('question');
let answersContainer = document.getElementById('answersContainer');
let restartButton = document.getElementById('restartButton');
let correctDisplay = document.getElementById('correct');
let incorrectDisplay = document.getElementById('incorrect');
let gameEnd = document.getElementById('endGameScore');

/** Adding Dom Content Loaded and Event listeners for buttons
 */
document.addEventListener("DOMContentLoaded", (event) => {
    playButton.addEventListener('click', startGame);
    restartButton.addEventListener('click', restartGame);
});

/** Quiz state variables
 */
let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

/** The function will start the quiz when Play Now button is clicked
 * First the function will exchanged the instructionArea with questionBox when Play Button is clicked
 * After that will make the corect and incorect answers to be equal to 0
 * And in the end will send to the next function
 */
function startGame() {
    instructionsArea.style.display = "none";
    questionBox.style.display = "block";
    correctAnswers = 0;
    incorrectAnswers = 0;
    showQuestionAndChoices();
}

/** The function will display current question and answer choices
 * First will be added from the array quizQuestions the first index of question
 * Second will be added the question to the div
 * Will be cleared previous choices
 * After that will be added the first choices and buttons for each choice
 * And in the end To be every btn clickeable and after that to show function nextQuestionAndChoices()
 *  */
function showQuestionAndChoices() {
    let indexQ = quizQuestions[currentQuestionIndex].question;
    questionElement.innerHTML = indexQ;
    answersContainer.innerHTML = '';
    let indexA = quizQuestions[currentQuestionIndex].choices;
    indexA.forEach(element => {
        let btn = document.createElement('button');
        btn.innerHTML = element;
        answersContainer.appendChild(btn);
        btn.setAttribute('onclick', `checkAnswer('${element}')`);
    });
}

/** The function will check selected answer
 * First will be added the correct answer
 * After that willbe added if statement If the selected answer it's = to the correct 
 * or incorect answer, to be added index +1 to the right span
 * And in the end the function will send to the next function
 */
function checkAnswer(selectedAnswer) {
    let correctAnswer = quizQuestions[currentQuestionIndex].answer;
    if (selectedAnswer === correctAnswer) {
        correctAnswers++;
        correctDisplay.innerText = correctAnswers;
    } else {
        incorrectAnswers++;
        incorrectDisplay.innerText = incorrectAnswers;
    }
    nextQuestionAndChoices();
}

/** The function will proceed to next question and choices
 * First will be added the next index in the array
 *  If statement - to show if the index it's smaller 
 * and the length to show again function showQuestionAndChoices()
 *  for the next question and answer
 */
function nextQuestionAndChoices() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestionAndChoices();
    } else {
        finishQuiz();
    }
}

// Function to finish the quiz and to show the corect and incorect answers
function finishQuiz() {
    // Hiding the instructionsArea and questionBox
    instructionsArea.style.display = "none";
    questionBox.style.display = "none";
    // Creating new paragraph and giving content
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = `<br>You Completed the Quiz!<br>
    <br>You are a real fan if you have more then 7 correct answers!<br>
     If you have less it's good idea to start to watch more One Piece<br>
     <br>Your Correct Answers are: ${correctAnswers}<br>Your Incorect Answers are: ${incorrectAnswers}`;
    gameEnd.appendChild(newParagraph);
}

/**
 * When the btn is clicked then the game must show the corect and incorect 
 * answers=0 and to show again the instructions menu
 */
function restartGame() {
    instructionsArea.style.display = "block";
    questionBox.style.display = "none";
    correctDisplay.innerText = 0;
    incorrectDisplay.innerText = 0;
    currentQuestionIndex = 0;
    gameEnd.innerHTML = '';
}