var score = 0;
var questionNumber = 0;
var timer = 60;
var interval;

document.getElementById("quizPage").style.display = "none";
document.getElementById("highScore").style.display = "none";
document.getElementById("finished").style.display = "none";

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

function endQuiz() {
    document.getElementById("quizPage").style.display = "none";
    document.getElementById("finished").style.display = "block";
    document.getElementById("score").innerHTML = "Your final score is: " + score + "/" + questions.length;
    document.getElementById("answer").innerHTML = "answer";
}

function submit() {
    var initials = document.getElementById("initials").value;
    var entry = "<span class='indent'></span>" + initials + "<span class='space'></span>" + score + "<br>";
    var records = localStorage.getItem("scores");
    if (records == null) {
        records = entry;
    }
    else {
        records += entry;
    }
    localStorage.setItem("scores", records);
    document.getElementById("hscore").innerHTML = records;
    document.getElementById("finished").style.display = "none";
    document.getElementById("highScore").style.display = "block";
}

function clear() {
    localStorage.setItem("scores", "");
    document.getElementById("hscore").innerHTML = "";
}

function back() {
    document.getElementById("initials").value = "";
    document.getElementById("highScore").style.display = "none";
    document.getElementById("start").style.display = "block";

}

function viewHS() {
    var records = localStorage.getItem("scores");
    document.getElementById("hscore").innerHTML = records;
    document.getElementById("start").style.display = "none";
    document.getElementById("quizPage").style.display = "none";
    document.getElementById("finished").style.display = "none";
    document.getElementById("highScore").style.display = "block";
}

document.getElementById("a").addEventListener("click", checkAnswer);
document.getElementById("b").addEventListener("click", checkAnswer);
document.getElementById("c").addEventListener("click", checkAnswer);
document.getElementById("d").addEventListener("click", checkAnswer);
document.getElementById("startButton").addEventListener("click", start);
document.getElementById("submit").addEventListener("click", submit);
document.getElementById("clear").addEventListener("click", clear);
document.getElementById("back").addEventListener("click", back);
document.getElementById("viewHS").addEventListener("click", viewHS);
