var timeEl = document.querySelector("p.time");
var secondsLeft = 75;
var scoreEl = document.querySelector("#score");

const introEl = document.querySelector("#intro");
const questionsEl = document.querySelector("#questions");
var questionEl = document("#question");
var questionCount = 0;
const rightWrongEL = document.querySelector("#right-wrong");

const finalEl = document.querySelector("#final");
var initialInput = document.querySelector("#score-list");
var scoreList = [];

const startBtn = document.querySelector("#start");
const ansBtn = document.querySelectorAll("#button.ansBtn");
const ans1Btn = document.querySelector("#answer1");
const ans2Btn = document.querySelector("#answer2");
const ans3Btn = document.querySelector("#answer3");
const ans4Btn = document.querySelector("#answer4");
const submitScoreBtn = document.querySelector("#submit-score");
const goBackBtn = document.querySelector("#goback");
const clearScoresBtn = document.querySelector("#clearscores");
const viewScoresBtn = document.querySelector("#view-scores");




const questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["1.strings", "2.booleans", "3.alerts", "4.numbers"],
        correctAnswer: "2"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["1.quotes", "2.curly brackets", "3.parentheses", "4.square brackets"],
        correctAnswer: "3"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["1.numbers and strings", "2.other arrays", "3.booleans", "4.all of the above"],
        correctAnswer: "4"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["1.commas", "2.curly brackets", "3.quotes", "4.parenthesis"],
        correctAnswer: "3"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["1.Javascript", "2.terminal / bash", "3.for loops", "4.console log"],
        correctAnswer: "3"
    },
];

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = 'Time:${secondsLeft}s';

        if (secondsLeft === 0 || questionCount === questions.length) {
            clearInterval(timerInterval);
            questionsEl.getElementsByClassName.display = "none";
            finalEl.style.display = "block";
            scoreEl.textContent = secondsLeft;
        }
    }, 1000);
}

funtion startQuiz() {
    introEl.style.display = "none";
    questionEl.style.display = "block";
    questionCount = 0;

    setTime();
    setQuestion(questionCount);
}

function setQuestion(id) {
    if (id < questions.length) {
        questionEl.textContent = questions[id].questions;
        ans1Btn.textContent = question[id].answer[0];
        ans2Btn.textContent = question[id].answer[1];
        ans3Btn.textContent = question[id].answer[2];
        ans4Btn.textContent = question[id].answer[3];
    }
}

function checkAnswer(event) {
    event.preventDefault();

    rightWrongEL.style.display = "block";
    var p = document.createElement("p");
    rightWrongEL.appendChild(p);
    setTimeout(function () {
        p.style.display = "none"
    })

}