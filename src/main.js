import "./style.css";
import { questions } from "./questions.js";

const app = document.querySelector("#app");

const state = {
  screen: "start",
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  selectedAnswer: "",
  hasAnswered: false
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function shuffleArray(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

function prepareQuestions(sourceQuestions) {
  return shuffleArray(sourceQuestions).map((question) => ({
    ...question,
    options: shuffleArray(question.options)
  }));
}

function getCurrentQuestion() {
  return state.questions[state.currentQuestionIndex];
}

function getResultMessage(percentage) {
  if (percentage === 100) {
    return "Fantastiskt! Du hade koll på varje fråga.";
  }

  if (percentage >= 70) {
    return "Snyggt jobbat! Du kan redan mycket geografi.";
  }

  if (percentage >= 40) {
    return "Bra kämpat! Du är på god väg och kan träna vidare.";
  }

  return "Fortsätt öva så kommer du snart att känna igen ännu fler platser.";
}

function startQuiz() {
  state.screen = "quiz";
  state.questions = prepareQuestions(questions);
  state.currentQuestionIndex = 0;
  state.score = 0;
  state.selectedAnswer = "";
  state.hasAnswered = false;
  render();
  focusElement('input[name="answer"]');
}

function showNextStep() {
  const isLastQuestion = state.currentQuestionIndex === state.questions.length - 1;

  if (isLastQuestion) {
    state.screen = "result";
    render();
    focusElement('[data-action="restart"]');
    return;
  }

  state.currentQuestionIndex += 1;
  state.selectedAnswer = "";
  state.hasAnswered = false;
  render();
  focusElement('input[name="answer"]');
}

function submitAnswer() {
  if (!state.selectedAnswer || state.hasAnswered) {
    return;
  }

  const currentQuestion = getCurrentQuestion();

  state.hasAnswered = true;

  if (state.selectedAnswer === currentQuestion.correctAnswer) {
    state.score += 1;
  }

  render();
  focusElement('[data-action="next"]');
}

function focusElement(selector) {
  requestAnimationFrame(() => {
    const element = app.querySelector(selector);
    element?.focus();
  });
}

function renderStartScreen() {
  return `
    <section class="page-shell">
      <div class="card card--hero">
        <p class="eyebrow">Svenskt geografiquiz</p>
        <h1 class="title">Geografikollen</h1>
        <p class="description">
          Öva på enkla geografifrågor på svenska. Du får en fråga i taget, ser din
          poäng direkt och kan starta om när du vill.
        </p>
        <button class="button" type="button" data-action="start">
          Starta quiz
        </button>
      </div>
    </section>
  `;
}

function renderOptions(question) {
  return question.options
    .map((option) => {
      const safeOption = escapeHtml(option);
      const isCorrect = state.hasAnswered && option === question.correctAnswer;
      const isWrongSelection =
        state.hasAnswered &&
        option === state.selectedAnswer &&
        option !== question.correctAnswer;

      const classes = [
        "option",
        isCorrect ? "is-correct" : "",
        isWrongSelection ? "is-wrong" : ""
      ]
        .filter(Boolean)
        .join(" ");

      return `
        <label class="${classes}">
          <input
            type="radio"
            name="answer"
            value="${safeOption}"
            ${state.selectedAnswer === option ? "checked" : ""}
            ${state.hasAnswered ? "disabled" : ""}
          />
          <span class="option__text">${safeOption}</span>
        </label>
      `;
    })
    .join("");
}

function renderFeedback(question) {
  if (!state.hasAnswered) {
    return "";
  }

  const isCorrectAnswer = state.selectedAnswer === question.correctAnswer;
  const feedbackClass = isCorrectAnswer ? "feedback--correct" : "feedback--incorrect";
  const feedbackTitle = isCorrectAnswer ? "Rätt!" : "Fel!";

  return `
    <section class="feedback ${feedbackClass}" aria-live="polite">
      <h2 class="feedback__title">${feedbackTitle}</h2>
      <p class="feedback__text">
        <strong>Förklaring:</strong> ${escapeHtml(question.explanation)}
      </p>
    </section>
  `;
}

function renderQuizScreen() {
  const question = getCurrentQuestion();
  const questionNumber = state.currentQuestionIndex + 1;
  const totalQuestions = state.questions.length;
  const nextLabel = questionNumber === totalQuestions ? "Se resultat" : "Nästa fråga";

  return `
    <section class="page-shell">
      <article class="card" aria-labelledby="question-title">
        <div class="topbar">
          <p class="progress">Fråga ${questionNumber} av ${totalQuestions}</p>
          <p class="score">Poäng: ${state.score}</p>
        </div>

        <h1 id="question-title" class="question">${escapeHtml(question.question)}</h1>

        <form class="quiz-form" data-role="quiz-form">
          <fieldset class="options-group">
            <legend class="sr-only">Välj ett svar</legend>
            <div class="options-grid">
              ${renderOptions(question)}
            </div>
          </fieldset>

          <div class="actions">
            <button
              class="button"
              type="submit"
              data-role="submit-button"
              ${state.selectedAnswer ? "" : "disabled"}
              ${state.hasAnswered ? "hidden" : ""}
            >
              Svara
            </button>

            <button
              class="button button--secondary"
              type="button"
              data-action="next"
              ${state.hasAnswered ? "" : "hidden"}
            >
              ${nextLabel}
            </button>
          </div>
        </form>

        ${renderFeedback(question)}
      </article>
    </section>
  `;
}

function renderResultScreen() {
  const totalQuestions = state.questions.length;
  const percentage = Math.round((state.score / totalQuestions) * 100);

  return `
    <section class="page-shell">
      <div class="card card--result">
        <p class="eyebrow">Resultat</p>
        <h1 class="title">Du är klar!</h1>
        <p class="result-stat">Rätt svar: ${state.score} av ${totalQuestions}</p>
        <p class="result-stat">Procent: ${percentage}%</p>
        <p class="description">${getResultMessage(percentage)}</p>
        <button class="button" type="button" data-action="restart">
          Starta om
        </button>
      </div>
    </section>
  `;
}

function render() {
  if (state.screen === "quiz") {
    app.innerHTML = renderQuizScreen();
    return;
  }

  if (state.screen === "result") {
    app.innerHTML = renderResultScreen();
    return;
  }

  app.innerHTML = renderStartScreen();
}

app.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-action]");

  if (!actionButton) {
    return;
  }

  const { action } = actionButton.dataset;

  if (action === "start" || action === "restart") {
    startQuiz();
    return;
  }

  if (action === "next") {
    showNextStep();
  }
});

app.addEventListener("change", (event) => {
  if (!(event.target instanceof HTMLInputElement)) {
    return;
  }

  if (event.target.name !== "answer" || state.hasAnswered) {
    return;
  }

  state.selectedAnswer = event.target.value;

  const submitButton = app.querySelector('[data-role="submit-button"]');

  if (submitButton instanceof HTMLButtonElement) {
    submitButton.disabled = false;
  }
});

app.addEventListener("submit", (event) => {
  const form = event.target;

  if (!(form instanceof HTMLFormElement) || form.dataset.role !== "quiz-form") {
    return;
  }

  event.preventDefault();
  submitAnswer();
});

render();
focusElement('[data-action="start"]');
