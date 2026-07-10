/**
 * Módulo de datos de los Finales
 *
 * Guarda los 4 finales alternativos que puede arrojar el quiz.
 * El número está fijado en 4 a propósito: la lógica de desempate de
 * src/logic.js (ver resolveEnding) asume exactamente 4 finales posibles
 * para 3 preguntas. Si se agrega o quita un final, hay que revisar
 * también src/data/questions.js y esa lógica.
 */

const endings = [
  {
    id: 1,
    title: 'El Trono Compartido',
    content:
      'Ningún trono se levanta solo. Dos linajes enfrentados deciden gobernar juntos, y por primera vez el poder se reparte en vez de conquistarse. El miedo que sostenía al reino empieza, por fin, a apagarse.',
    characters: ['Jon Snow', 'Daenerys Targaryen'],
    themes: ['amor', 'unión', 'poder compartido'],
    image: 'amor-unido',
  },
  {
    id: 2,
    title: 'Cenizas del Trono de Hierro',
    content:
      'El fuego de dragón no sirve para conquistar, sino para terminar. Los últimos herederos del linaje eligen destruir el símbolo que llevó a Poniente a la guerra, cerrando un ciclo que llevaba generaciones repitiéndose.',
    characters: ['Daenerys Targaryen', 'Jon Snow'],
    themes: ['ruptura', 'sacrificio', 'libertad'],
    image: 'ciclo-roto',
  },
  {
    id: 3,
    title: 'El Rostro de la Justicia',
    content:
      'La venganza no siempre grita: a veces espera, cambia de cara y golpea en silencio. Con paciencia de años, la justicia llega igual, aunque no tenga la forma que el reino esperaba.',
    characters: ['Arya Stark', 'Cersei Lannister'],
    themes: ['venganza', 'justicia', 'astucia'],
    image: 'venganza',
  },
  {
    id: 4,
    title: 'La Corona del Norte',
    content:
      'No hace falta magia ni profecías para gobernar bien: hace falta haber sobrevivido, haber aprendido y no haber dejado de proteger a los suyos. El Norte elige a quien ya lo defendió mil veces.',
    characters: ['Sansa Stark'],
    themes: ['liderazgo', 'independencia', 'resiliencia'],
    image: 'reina-norte',
  },
];

export default endings;
