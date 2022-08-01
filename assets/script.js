// query selectors
var startBtn = document.getElementById("startBtn");
var questionHeader = document.getElementById("questionHeader");
var questionImage = document.getElementById("questionImage");
var questionChoices = document.querySelectorAll(".quizQuestions")
var countdownTimer = document.getElementById("countdownTmr");
var userInitials = document.getElementById("userInitials");
var submitscoreBtn = document.getElementById("submitscoreBtn");
var highscoreList = document.getElementById("highScores");
console.log(questionChoices);

//function for timer
var secondsLeft = 60

function startTimer() {

    displayQuestions();
    var timer = setInterval(function () {
        secondsLeft--;
        countdownTimer.innerHTML = secondsLeft + " seconds remaining";

        if (secondsLeft === 0) {
            clearInterval(timer);
            alert("Times up!");
        }
        console.log("working");
    }, 1000);

};

//event listener for start button
startBtn.addEventListener("click", function () {
    startTimer();
});
console.log(startTimer);



//arrays for questions
var questions = [
    {
        question: "Which of the following is an example of a string?",
        choices: [
            "[A,B,C,D]",
            "A,B,C,D",
            "'A, B, C, D'",
            "{A,B,C,D}",
        ],

        correctAnswer: "'A, B, C, D'",
    },
    {
        question: "A boolean represents what kind of value?",
        choices: {
            choiceA: "An integer",
            choiceB: "A user input",
            choiceC: "Text characters",
            choiceD: "True/False",
        },

        correctAnswer: "choiceD"
    },
    {
        question: "When writing an 'if' statement, what syntax is used to account for a different outcome?",
        choices: {
            choiceA: "Else",
            choiceB: "Otherwise",
            choiceC: "Instead",
            choiceD: "Then",
        },

        correctAnswer: "choiceA"
    },
    {
        question: "What does this symbol represent in a JavaScript math function: % ?",
        choices: {
            choiceA: "Multiplication",
            choiceB: "Remainder",
            choiceC: "Division",
            choiceD: "Decimal",
        },

        correctAnswer: "choiceB"
    },
    {
        question: "In this array, which index number is C: [E, D, C, B, A] ?",
        choices: [
            "3",
            "03",
            "2",
            "10",
        ],

        correctAnswer: "2"
    },
];

//for loop to show questions
var questionCounter = 0;
function displayQuestions() {
    questionHeader.innerHTML = questions[questionCounter].question;
    console.log(questions[questionCounter].question);
    startBtn.setAttribute("style", "display: none")
    for (var i = 0; i < questions.length; i++) {
        console.log(questions[questionCounter].choices[i]);
        questionChoices.textContent = questions[0].choices;
    }
}



//input high score with initials
var item = document.getElementById("userInitials").value;
function saveInitials() {
    if (item === "") {
        alert("Please insert your initials to save your score")
    } else {
        localStorage.setItem(item);
        alert("Score saved")

    }
}

submitscoreBtn.addEventListener("click", saveInitials);
//show high scores
localStorage.getItem(item)