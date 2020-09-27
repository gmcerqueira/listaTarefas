const BotaoDeleta = () => {
  const botaoDeleta = document.createElement('button');
  botaoDeleta.classList.add('delete-button');
  botaoDeleta.innerText = 'deletar'

  botaoDeleta.addEventListener('click', deletarTarefa);

  return botaoDeleta;
}

const deletarTarefa = (event) => {
  const botaoDeleta = event.target;

  const primeiroPai = botaoDeleta.parentElement;
  const tarefaDeletada = primeiroPai.parentElement;

  tarefaDeletada.remove();
}

export default BotaoDeleta;