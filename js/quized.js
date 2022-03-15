const quiz = document.getElementById('quiz');
const results = document.getElementById('results');
const submitButton = document.getElementById('submit');
const answerLabels = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');

previousButton.addEventListener('click', showPreviousQuestion);
nextButton.addEventListener('click', showNextQuestion);
submitButton.addEventListener('click', checkUserAnswers);

let questionAnswers = [];

questions.forEach(function (currentQuestion, questionNumber) {
    var output = '';
    output += '<div class="question-block">' + currentQuestion.question;
    output += '<div class="answers">';
    let answerOrder = randomOrder(currentQuestion.answers.length);

    if (randomizeAnswers) {
        for (let i = 0; i < currentQuestion.answers.length; i++) {
            output += '<input type="radio" id="' + questionNumber + '_' + i + '" name="question' + questionNumber + '" value="' + currentQuestion.answers[answerOrder[i]].answer + '"><label id="' + questionNumber + '_' + i + '_label" for="' + questionNumber + '_' + i + '">' + answerLabels[i] + ': ' + currentQuestion.answers[answerOrder[i]].answer + '</label><br />';
            questionAnswer = { questionNumber: currentQuestion.number, questionAnswerNumber: questionNumber + '_' + i, correct: currentQuestion.answers[answerOrder[i]].correct };
            questionAnswers.push(questionAnswer);
        }
    }
    else {
        currentQuestion.answers.forEach(function (currentAnswer, answerNumber) {
            output += '<input type="radio" id="' + questionNumber + '_' + answerNumber + '" name="question' + questionNumber + '" value="' + currentAnswer.answer + '"><label id="' + questionNumber + '_' + answerNumber + '_label" for="' + questionNumber + '_' + answerNumber + '">' + answerLabels[answerNumber] + ': ' + currentAnswer.answer + '</label><br />';
            questionAnswer = { questionNumber: currentQuestion.number, questionAnswerNumber: questionNumber + '_' + answerNumber, correct: currentAnswer.correct };
            questionAnswers.push(questionAnswer);
        });
    }

    output += "</div></div>";
    quiz.innerHTML += output;
});

const questionBlocks = document.querySelectorAll('.question-block');
let currentQuestion = 0;
function showQuestion(n) {
    questionBlocks[currentQuestion].classList.remove('active-question');
    questionBlocks[n].classList.add('active-question');

    currentQuestion = n;
    if (currentQuestion === 0) {
        previousButton.style.display = 'none';
    }
    else {
        previousButton.style.display = 'inline-block';
    }
    if (currentQuestion === questionBlocks.length - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    }
    else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}

function checkUserAnswers() {
    results.innerHTML = resultsHeading;
    var correctAnswers = 0;
    questionAnswers.forEach(function (currentAnswer, answerNumber) {
        var answer = document.getElementById(currentAnswer.questionAnswerNumber);
        var answerLabel = document.getElementById(currentAnswer.questionAnswerNumber + '_label');
        answerLabel.classList.remove('correct', 'incorrect');
        if (answer.checked == true) {
            if (currentAnswer.correct) {
                results.innerHTML += '<span class="correct">Question ' + currentAnswer.questionNumber + ' was answered correctly.</span><br/>';
                answerLabel.classList.add('correct');
                correctAnswers++;
            }
            else {
                results.innerHTML += '<span class="incorrect">Question ' + currentAnswer.questionNumber + ' was not answered correctly.</span><br />';
                answerLabel.classList.add('incorrect');
            }
        }

    });
    results.innerHTML += '<p>' + correctAnswers + ' out of ' + questions.length + ' (' + (correctAnswers / questions.length * 100) + '%)</p>';
}

showQuestion(currentQuestion);

function showNextQuestion() {
    showQuestion(currentQuestion + 1);
}

function showPreviousQuestion() {
    showQuestion(currentQuestion - 1);
}

function randomOrder(numAnswers) {
    let answerOrder = [];
    var count = 0;
    do {
        var random = Math.floor((Math.random() * numAnswers));
        var isRandom = true;
        for (let i = 0; i < numAnswers; i++) {
            if (answerOrder[i] == random) {
                isRandom = false;
            }
        }
        if (isRandom) {
            answerOrder.push(random);
            count++;
        }
    } while (count < numAnswers);
    return answerOrder;
}