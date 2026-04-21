import "./style.css";
import { sectionOrder, sections } from "./content.js";

const app = document.querySelector("#app");

const state = {
  screen: "home",
  activeSectionId: null,
  quizItems: [],
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

function getSection(sectionId = state.activeSectionId) {
  return sections[sectionId] ?? null;
}

function getQuestionCount(section) {
  if (section.questions) {
    return section.questions.length;
  }

  if (section.texts) {
    return section.texts.reduce(
      (total, text) => total + text.questions.length,
      0
    );
  }

  return 0;
}

function prepareQuestions(items, shouldShuffleQuestions, shouldShuffleOptions) {
  const preparedItems = items.map((item) => ({
    ...item,
    options: [...item.options]
  }));

  const orderedItems = shouldShuffleQuestions
    ? shuffleArray(preparedItems)
    : preparedItems;

  return orderedItems.map((item) => ({
    ...item,
    options: shouldShuffleOptions ? shuffleArray(item.options) : [...item.options]
  }));
}

function buildQuizItems(section) {
  if (section.texts) {
    const textQuestions = section.texts.flatMap((text, textIndex) =>
      text.questions.map((question, questionIndex) => ({
        ...question,
        passageTitle: text.title,
        passageParagraphs: text.paragraphs,
        passageIndex: textIndex,
        passageCount: section.texts.length,
        questionIndexInPassage: questionIndex,
        questionCountInPassage: text.questions.length
      }))
    );

    return prepareQuestions(
      textQuestions,
      section.shuffleQuestions,
      section.shuffleOptions
    );
  }

  const standaloneQuestions = section.questions.map((question, questionIndex) => ({
    ...question,
    passageTitle: "",
    passageParagraphs: [],
    passageIndex: 0,
    passageCount: 1,
    questionIndexInPassage: questionIndex,
    questionCountInPassage: section.questions.length
  }));

  return prepareQuestions(
    standaloneQuestions,
    section.shuffleQuestions,
    section.shuffleOptions
  );
}

function resetQuizState() {
  state.quizItems = [];
  state.currentQuestionIndex = 0;
  state.score = 0;
  state.selectedAnswer = "";
  state.hasAnswered = false;
}

function getCurrentQuestion() {
  return state.quizItems[state.currentQuestionIndex];
}

function getResultMessage(section, percentage) {
  if (percentage === 100) {
    return section.resultMessages.perfect;
  }

  if (percentage >= 70) {
    return section.resultMessages.strong;
  }

  if (percentage >= 40) {
    return section.resultMessages.okay;
  }

  return section.resultMessages.retry;
}

function openSection(sectionId) {
  const section = getSection(sectionId);

  if (!section) {
    return;
  }

  state.activeSectionId = sectionId;
  resetQuizState();
  state.screen = section.type === "guide" ? "guide" : "section";
  render();
  focusElement(
    section.type === "guide" ? '[data-action="go-home"]' : '[data-action="start-quiz"]'
  );
}

function goHome() {
  state.activeSectionId = null;
  resetQuizState();
  state.screen = "home";
  render();
  focusElement('[data-action="open-section"]');
}

function startQuiz() {
  const section = getSection();

  if (!section || section.type !== "quiz") {
    return;
  }

  state.quizItems = buildQuizItems(section);
  state.currentQuestionIndex = 0;
  state.score = 0;
  state.selectedAnswer = "";
  state.hasAnswered = false;
  state.screen = "quiz";
  render();
  focusElement('input[name="answer"]');
}

function showNextStep() {
  const isLastQuestion = state.currentQuestionIndex === state.quizItems.length - 1;

  if (isLastQuestion) {
    state.screen = "result";
    render();
    focusElement('[data-action="restart-quiz"]');
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

function renderParagraphs(paragraphs) {
  return paragraphs
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");
}

function renderPills(items, wrapperClass, itemClass) {
  if (!items.length) {
    return "";
  }

  return `
    <div class="${wrapperClass}">
      ${items
        .map((item) => `<span class="${itemClass}">${escapeHtml(item)}</span>`)
        .join("")}
    </div>
  `;
}

function renderHomeCards() {
  return sectionOrder
    .map((sectionId) => {
      const section = getSection(sectionId);
      const countLabel =
        section.type === "guide"
          ? "Skrivstöd och exempeltext"
          : `${getQuestionCount(section)} frågor${
              section.texts ? ` i ${section.texts.length} texter` : ""
            }`;

      return `
        <button
          class="choice-card"
          type="button"
          data-action="open-section"
          data-section="${section.id}"
        >
          <p class="choice-card__eyebrow">${escapeHtml(section.eyebrow)}</p>
          <h2 class="choice-card__title">${escapeHtml(section.homeTitle)}</h2>
          <p class="choice-card__description">${escapeHtml(section.homeDescription)}</p>
          <p class="choice-card__meta">${escapeHtml(countLabel)}</p>
        </button>
      `;
    })
    .join("");
}

function renderHomeScreen() {
  return `
    <section class="page-shell page-shell--content">
      <div class="content-stack content-stack--wide">
        <article class="card card--hero card--wide">
          <p class="eyebrow">Startsida</p>
          <h1 class="title">Öva inför prov</h1>
          <p class="description">
            Välj den del du vill träna på. Geografi, Engelska delprov B,
            Svenska B1 och Biologi är interaktiva övningar, medan Svenska C1
            ger skrivstöd för berättelser.
          </p>
        </article>

        <div class="choice-grid">
          ${renderHomeCards()}
        </div>
      </div>
    </section>
  `;
}

function renderResources(section) {
  if (!section.resources || !section.resources.length) {
    return "";
  }

  return `
    <section class="preview-block">
      <h2 class="section-title">Studiematerial</h2>
      <ul class="resource-list">
        ${section.resources
          .map(
            (resource) => `
              <li>
                <a class="resource-link" href="${escapeHtml(resource.url)}" target="_blank" rel="noopener noreferrer">
                  ${escapeHtml(resource.label)}
                </a>
              </li>
            `
          )
          .join("")}
      </ul>
    </section>
  `;
}

function renderTextPreview(section) {
  if (!section.texts) {
    return "";
  }

  return `
    <section class="preview-block">
      <h2 class="section-title">Texter i övningen</h2>
      <div class="preview-grid">
        ${section.texts
          .map(
            (text, index) => `
              <article class="mini-card">
                <p class="mini-card__eyebrow">Text ${index + 1}</p>
                <h3 class="mini-card__title">${escapeHtml(text.title)}</h3>
                <p class="mini-card__text">${text.questions.length} frågor</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderIntroScreen(section) {
  return `
    <section class="page-shell page-shell--content">
      <div class="content-stack">
        <article class="card card--hero card--wide">
          <p class="eyebrow">${escapeHtml(section.eyebrow)}</p>
          <h1 class="title title--section">${escapeHtml(section.title)}</h1>
          <p class="description">${escapeHtml(section.description)}</p>
          ${renderPills(section.highlights, "meta-row", "meta-pill")}
          ${renderTextPreview(section)}
          ${renderResources(section)}

          <div class="actions actions--wrap actions--center">
            <button class="button" type="button" data-action="start-quiz">
              ${escapeHtml(section.startLabel)}
            </button>
            <button class="button button--secondary" type="button" data-action="go-home">
              Till startsidan
            </button>
          </div>
        </article>
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
      ${
        isCorrectAnswer
          ? ""
          : `
            <p class="feedback__text">
              <strong>Rätt svar:</strong> ${escapeHtml(question.correctAnswer)}
            </p>
          `
      }
      <p class="feedback__text">
        <strong>Förklaring:</strong> ${escapeHtml(question.explanation)}
      </p>
    </section>
  `;
}

function renderPassageCard(question) {
  if (!question.passageParagraphs.length) {
    return "";
  }

  return `
    <article class="card card--passage">
      <div class="card__topline">
        <p class="eyebrow">Lästext ${question.passageIndex + 1} av ${question.passageCount}</p>
        <p class="passage-meta">${question.questionCountInPassage} frågor</p>
      </div>
      <h2 class="section-title">${escapeHtml(question.passageTitle)}</h2>
      <div class="passage-copy">
        ${renderParagraphs(question.passageParagraphs)}
      </div>
    </article>
  `;
}

function renderQuizScreen() {
  const section = getSection();
  const question = getCurrentQuestion();
  const questionNumber = state.currentQuestionIndex + 1;
  const totalQuestions = state.quizItems.length;
  const totalProgress = Math.round((questionNumber / totalQuestions) * 100);
  const nextQuestion = state.quizItems[state.currentQuestionIndex + 1];
  let nextLabel = questionNumber === totalQuestions ? "Se resultat" : "Nästa fråga";

  if (nextQuestion && nextQuestion.passageIndex !== question.passageIndex) {
    nextLabel = "Till nästa text";
  }

  const infoItems = section.texts
    ? [
        `Totalt ${questionNumber} av ${totalQuestions}`,
        `Text ${question.passageIndex + 1} av ${question.passageCount}`,
        `Fråga i texten ${question.questionIndexInPassage + 1} av ${question.questionCountInPassage}`,
        `Poäng ${state.score}`
      ]
    : [`Fråga ${questionNumber} av ${totalQuestions}`, `Poäng ${state.score}`];

  return `
    <section class="page-shell page-shell--content">
      <div class="content-stack">
        <article class="card card--section-head">
          <div class="card__topline">
            <p class="eyebrow">${escapeHtml(section.eyebrow)}</p>
            <button class="button button--secondary button--small" type="button" data-action="go-home">
              Till startsidan
            </button>
          </div>
          <h1 class="title title--section">${escapeHtml(section.title)}</h1>
          <p class="description">${escapeHtml(section.quizDescription)}</p>
          <div class="progress-track" aria-hidden="true">
            <span class="progress-fill" style="width: ${totalProgress}%"></span>
          </div>
          ${renderPills(infoItems, "info-pills", "info-pill")}
        </article>

        ${renderPassageCard(question)}

        <article class="card" aria-labelledby="question-title">
          <h2 id="question-title" class="question question--compact">
            ${escapeHtml(question.question)}
          </h2>

          <form class="quiz-form" data-role="quiz-form">
            <fieldset class="options-group">
              <legend class="sr-only">Välj ett svar</legend>
              <div class="options-grid">
                ${renderOptions(question)}
              </div>
            </fieldset>

            <div class="actions actions--wrap">
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
      </div>
    </section>
  `;
}

function renderResultScreen() {
  const section = getSection();
  const totalQuestions = state.quizItems.length;
  const percentage = Math.round((state.score / totalQuestions) * 100);

  return `
    <section class="page-shell page-shell--content">
      <div class="content-stack">
        <article class="card card--result card--wide">
          <p class="eyebrow">Resultat</p>
          <h1 class="title title--section">${escapeHtml(section.resultTitle)}</h1>
          <p class="result-stat">Rätt svar: ${state.score} av ${totalQuestions}</p>
          <p class="result-stat">Procent: ${percentage}%</p>
          <p class="description">${escapeHtml(getResultMessage(section, percentage))}</p>

          <div class="actions actions--wrap actions--center">
            <button class="button" type="button" data-action="restart-quiz">
              Börja om
            </button>
            <button class="button button--secondary" type="button" data-action="go-home">
              Till startsidan
            </button>
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderGuideScreen(section) {
  return `
    <section class="page-shell page-shell--content">
      <div class="content-stack">
        <article class="card card--hero card--wide">
          <p class="eyebrow">${escapeHtml(section.eyebrow)}</p>
          <h1 class="title title--section">${escapeHtml(section.title)}</h1>
          <p class="description">${escapeHtml(section.description)}</p>
          ${renderPills(section.highlights, "meta-row", "meta-pill")}

          <div class="actions">
            <button class="button button--secondary" type="button" data-action="go-home">
              Till startsidan
            </button>
          </div>
        </article>

        <div class="split-grid">
          <article class="card">
            <h2 class="section-title">Så bygger du en berättelse</h2>
            <ul class="detail-list">
              ${section.structure
                .map(
                  (item) => `
                    <li>
                      <strong>${escapeHtml(item.label)}:</strong> ${escapeHtml(item.text)}
                    </li>
                  `
                )
                .join("")}
            </ul>
          </article>

          <article class="card">
            <h2 class="section-title">Checklista innan du är klar</h2>
            <ul class="checklist">
              ${section.checklist
                .map((item) => `<li>${escapeHtml(item)}</li>`)
                .join("")}
            </ul>
          </article>
        </div>

        <article class="card card--story">
          <p class="eyebrow">Exempeltext</p>
          <h2 class="section-title">${escapeHtml(section.example.title)}</h2>
          <div class="story-text">
            ${renderParagraphs(section.example.paragraphs)}
          </div>
        </article>

        <article class="card">
          <h2 class="section-title">Varför den här texten fungerar</h2>
          <ul class="detail-list">
            ${section.exampleNotes
              .map((item) => `<li>${escapeHtml(item)}</li>`)
              .join("")}
          </ul>
        </article>
      </div>
    </section>
  `;
}

function render() {
  if (state.screen === "section") {
    app.innerHTML = renderIntroScreen(getSection());
    return;
  }

  if (state.screen === "quiz") {
    app.innerHTML = renderQuizScreen();
    return;
  }

  if (state.screen === "result") {
    app.innerHTML = renderResultScreen();
    return;
  }

  if (state.screen === "guide") {
    app.innerHTML = renderGuideScreen(getSection());
    return;
  }

  app.innerHTML = renderHomeScreen();
}

app.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-action]");

  if (!actionButton) {
    return;
  }

  const { action, section } = actionButton.dataset;

  if (action === "open-section" && section) {
    openSection(section);
    return;
  }

  if (action === "start-quiz" || action === "restart-quiz") {
    startQuiz();
    return;
  }

  if (action === "go-home") {
    goHome();
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
focusElement('[data-action="open-section"]');
