var score = 0;
var questionNumber = 0;
var timer = 60;
var interval;

function start() {
    score = 0;
    questionNumber = 0;
    timer = 60;
    document.getElementById("start").style.display = "none";
    document.getElementById("quizPage").style.display = "block";
    interval = setInterval("updateTimer()", 1000);
    nextQuestion();
}

function updateTimer() {
    document.getElementById("time").innerHTML = "Time:" + timer;
    timer--;
    if (timer < 0) {
        clearInterval(interval);
        endQuiz();
    }
}