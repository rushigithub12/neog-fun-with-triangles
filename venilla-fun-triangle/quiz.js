const quizForm = document.querySelector(".quiz-form");
const btnSub = document.querySelector("#btnSub");
const answers = document.querySelector("#answers");

const correctAnswers = ["90°", "right angled"];

btnSub.addEventListener("click", calculateScore);

function calculateScore() {
    let score = 0;
    let index = 0;

    const formResults = new FormData(quizForm);

    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score += 1;
        }
        index += 1;
    }
    answers.innerText = `You score is ${score}`;
}