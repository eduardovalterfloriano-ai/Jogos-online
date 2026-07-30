document.addEventListener('DOMContentLoaded', () => {
  // Controle de alternância para os botões "Saiba Mais" nos cards
  const botoesInfo = document.querySelectorAll('.btn-info');

  botoesInfo.forEach((botao) => {
    botao.addEventListener('click', () => {
      const card = botao.closest('.card');
      const detalhes = card.querySelector('.detalhes-conteudo');

      // Alterna a exibição das informações
      detalhes.classList.toggle('ativo');

      // Altera o texto do botão
      if (detalhes.classList.contains('ativo')) {
        botao.textContent = 'Ocultar Informações';
      } else {
        botao.textContent = 'Saiba Mais';
      }
    });
  });
});
