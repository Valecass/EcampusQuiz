let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let questions = [];

const quizContainer = document.getElementById("quiz-container");
const nextButton = document.getElementById("nextButton");
const correctCount = document.getElementById("correctCount");
const wrongCount = document.getElementById("wrongCount");
const questionNumber = document.getElementById("questionNumber");
const totalQuestions = document.getElementById("totalQuestions");

const courseTitle = document.getElementById("courseTitle");
const courseInfo = document.getElementById("courseInfo");

const selectedCourse = localStorage.getItem("selectedCourse");

fetch(selectedCourse)
  .then(res => res.json())
  .then(data => {
    questions = data.questions;
    totalQuestions.textContent = questions.length;
    courseTitle.textContent = data.course.name;
    courseInfo.textContent = data.course.degree + " – Docente: " + data.course.teacher;
    loadQuestion(currentQuestionIndex);
  });

function loadQuestion(index) {
  const q = questions[index];
  questionNumber.textContent = index + 1;

  quizContainer.innerHTML = `
    <h5 class="mb-4 fw-semibold text-center">${q.question}</h5>
    ${q.options.map((opt, i) => `
      <button class="answer-button" data-index="${i}">${opt}</button>
    `).join("")}
  `;

  const buttons = document.querySelectorAll(".answer-button");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = parseInt(btn.getAttribute("data-index"));
      buttons.forEach(b => b.classList.add("disabled"));
      if (selected === q.correct) {
        btn.classList.add("correct");
        correctAnswers++;
        correctCount.textContent = correctAnswers;
      } else {
        btn.classList.add("incorrect");
        buttons[q.correct].classList.add("correct");
        wrongAnswers++;
        wrongCount.textContent = wrongAnswers;
      }
      nextButton.disabled = false;
    });
  });
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  nextButton.disabled = true;
  if (currentQuestionIndex < questions.length) {
    loadQuestion(currentQuestionIndex);
  } else {
    quizContainer.innerHTML = `
      <div class="text-center">
        <h4 class="text-success">Quiz completato!</h4>
        <p>Risposte corrette: ${correctAnswers} / ${questions.length}</p>
      </div>
    `;
    nextButton.remove();
  }
});
