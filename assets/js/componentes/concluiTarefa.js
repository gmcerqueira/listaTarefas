const BotaoConclui = () => {
  const botaoConclui = document.createElement('button');
  botaoConclui.classList.add('check-button');
  botaoConclui.innerText = 'concluir'

  botaoConclui.addEventListener('click', concluirTarefa);

  return botaoConclui;
}

const concluirTarefa = (event) => {
  const botaoConclui = event.target;

  const primeiroPai = botaoConclui.parentElement;
  const tarefaCompleta = primeiroPai.parentElement;

  tarefaCompleta.classList.toggle('done');
}

export default BotaoConclui;