(() => {
  const novaTarefa = document.querySelector('[data-form-button]');
  

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
    tarefa.appendChild(CriarBotoes())
    input.value = " ";
  }
  novaTarefa.addEventListener('click', criarTarefa);

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

  const CriarBotoes = () => {
    const criarBotoes = document.createElement('div');
    criarBotoes.classList.add('button-box');

    criarBotoes.appendChild(BotaoConclui())
    criarBotoes.appendChild(BotaoDeleta())

    return criarBotoes
  }
})()