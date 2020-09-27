import criarTarefa from './componentes/criarTarefa.js';

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);
