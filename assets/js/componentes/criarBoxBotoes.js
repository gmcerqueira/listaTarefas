import BotaoConclui from './concluiTarefa.js';
import BotaoDeleta from './deletaTarefa.js';

const CriarBoxBotoes = () => {
  const criarBoxBotoes = document.createElement('div');
  criarBoxBotoes.classList.add('button-box');

  criarBoxBotoes.appendChild(BotaoConclui())
  criarBoxBotoes.appendChild(BotaoDeleta())

  return criarBoxBotoes
}

export default CriarBoxBotoes;