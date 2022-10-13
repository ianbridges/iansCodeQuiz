var score = 0;
var questionNumber = 0;
var timer = 60;
var interval;

document.getElementById("quizPage").style.display = "none";

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

function nextQuestion() {
    document.getElementById("question").innerHTML = questions[questionNumber].text;
    document.getElementById("a").textContent = questions[questionNumber].answers[0];
    document.getElementById("b").textContent = questions[questionNumber].answers[1];
    document.getElementById("c").textContent = questions[questionNumber].answers[2];
    document.getElementById("d").textContent = questions[questionNumber].answers[3];
}

function checkAnswer() {
    var answer = this.textContent;
    if (answer == questions[questionNumber].correctAnswer) {
        document.getElementById("answer").innerHTML = "Correct!";
        score++
    }
    else {
        document.getElementById("answer").innerHTML = "Wrong!";
        timer -= 10;
    }
    questionNumber++;
    if (questionNumber < questions.length) {
        nextQuestion();
    }
    else {
        clearInterval(interval);
        endQuiz();
    }
}

document.getElementById("a").addEventListener("click", checkAnswer);
document.getElementById("b").addEventListener("click", checkAnswer);
document.getElementById("c").addEventListener("click", checkAnswer);
document.getElementById("d").addEventListener("click", checkAnswer);
document.getElementById("startButton").addEventListener("click", start);