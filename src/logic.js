import endings from './data/endings.js';
import questions from './data/questions.js';

const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const endingTextEl = document.getElementById('ending-text');
const mediaContainer = document.getElementById('media-container');
const btnStart = document.getElementById('btn-start-quiz');
const btnRestart = document.getElementById('btn-restart');

let currentQuestionIndex = 0;
let userAnswers = [];

// Con 3 preguntas y 4 finales, un empate solo puede darse cuando las 3
// respuestas apuntan a 3 finales distintos (1-1-1-0): nunca puede haber
// dos finales empatados en 2 votos con solo 3 respuestas totales. En ese
// caso se desempata con la primera respuesta, que siempre queda entre
// los empatados.
function resolveEnding(answerEndingIds) {
  const scores = { 1: 0, 2: 0, 3: 0, 4: 0 };
  answerEndingIds.forEach((id) => scores[id]++);

  const maxScore = Math.max(...Object.values(scores));
  const topIds = Object.keys(scores)
    .map(Number)
    .filter((id) => scores[id] === maxScore);

  return topIds.length === 1 ? topIds[0] : answerEndingIds[0];
}

function resetQuizState() {
  currentQuestionIndex = 0;
  userAnswers = [];
}

function renderQuestion(index) {
  const question = questions[index];

  quizContainer.innerHTML = `
    <p class="quiz-progress">Pregunta ${index + 1} de ${questions.length}</p>
    <h2 class="question-text">${question.text}</h2>
    <div class="options-grid">
      ${question.options
        .map(
          (option) => `
            <button type="button" class="option-btn" data-ending-id="${option.endingId}">
              ${option.text}
            </button>
          `
        )
        .join('')}
    </div>
  `;
}

function renderMediaPlaceholder(ending) {
  mediaContainer.innerHTML = '';
  const visual = document.createElement('div');
  visual.className = `media-visual media-visual--${ending.image}`;
  visual.textContent = ending.title;
  mediaContainer.appendChild(visual);
}

function renderResult(ending) {
  endingTextEl.textContent = ending.content;
  renderMediaPlaceholder(ending);
  quizContainer.classList.add('hidden');
  resultContainer.classList.remove('hidden');
  resultContainer.scrollIntoView({ behavior: 'smooth' });
}

function finishQuiz() {
  const endingId = resolveEnding(userAnswers);
  const ending = endings.find((e) => e.id === endingId);
  renderResult(ending);
}

function handleAnswer(endingId) {
  userAnswers.push(endingId);
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    renderQuestion(currentQuestionIndex);
  } else {
    finishQuiz();
  }
}

function startQuiz() {
  resetQuizState();
  resultContainer.classList.add('hidden');
  quizContainer.classList.remove('hidden');
  renderQuestion(0);
  quizContainer.scrollIntoView({ behavior: 'smooth' });
}

quizContainer.addEventListener('click', (event) => {
  const optionBtn = event.target.closest('[data-ending-id]');
  if (!optionBtn) return;
  handleAnswer(Number(optionBtn.dataset.endingId));
});

btnStart.addEventListener('click', startQuiz);
btnRestart.addEventListener('click', startQuiz);
