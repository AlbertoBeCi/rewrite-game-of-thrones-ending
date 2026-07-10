/**
 * Módulo de datos del Quiz
 *
 * 3 preguntas, 4 opciones cada una. Cada opción apunta a un endingId (1-4)
 * de src/data/endings.js.
 *
 * Regla obligatoria: dentro de UNA misma pregunta, las 4 opciones deben
 * repartirse entre los 4 endingId distintos, sin repetir ninguno. Eso es
 * lo que garantiza que resolveEnding() en src/logic.js siempre pueda
 * desempatar usando la primera respuesta como criterio.
 */

const questions = [
  {
    id: 1,
    text: 'Tienes el poder absoluto sobre el reino en tus manos. ¿Qué haces?',
    options: [
      { text: 'Lo comparto con quien también lo merece', endingId: 1 },
      { text: 'Lo destruyo antes de que corrompa a nadie más', endingId: 2 },
      { text: 'Lo uso con paciencia, para hacer justicia a mi manera', endingId: 3 },
      { text: 'Lo uso para proteger a los míos, nada más', endingId: 4 },
    ],
  },
  {
    id: 2,
    text: '¿Cómo enfrentas a quien te hizo daño?',
    options: [
      { text: 'Buscando reconciliarnos y construir algo juntos', endingId: 1 },
      { text: 'Rompiendo para siempre el ciclo que nos hizo daño', endingId: 2 },
      { text: 'Con paciencia, esperando el momento exacto', endingId: 3 },
      { text: 'Defendiendo primero a los que dependen de mí', endingId: 4 },
    ],
  },
  {
    id: 3,
    text: 'Al final de todo, ¿qué es lo que más te importa dejar atrás?',
    options: [
      { text: 'Una alianza que una a quienes antes eran enemigos', endingId: 1 },
      { text: 'La certeza de que ese error no se repetirá', endingId: 2 },
      { text: 'Que cada quien haya recibido lo que merecía', endingId: 3 },
      { text: 'Un hogar seguro para los que confiaron en mí', endingId: 4 },
    ],
  },
];

export default questions;
