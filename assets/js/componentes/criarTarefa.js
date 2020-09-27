import CriarBoxBotoes from './criarBoxBotoes.js';

const criarTarefa = (event) => {
  event.preventDefault();

  const lista = document.querySelector('[data-list]')
  const input = document.querySelector('[data-form-input]');
  const valor = input.value;

  const tarefa = document.createElement('li');
  tarefa.classList.add('task');

  const conteudo = `<p class="content">${valor}</p>`;

  tarefa.innerHTML = conteudo;
  lista.appendChild(tarefa)
  tarefa.appendChild(CriarBoxBotoes())
  input.value = " ";
}

export default criarTarefa;