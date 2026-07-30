document.addEventListener('DOMContentLoaded', () => {
  const botoesInfo = document.querySelectorAll('.btn-info');

  botoesInfo.forEach((botao) => {
    botao.addEventListener('click', () => {
      const card = botao.closest('.card');
      const detalhes = card.querySelector('.detalhes-conteudo');

      detalhes.classList.toggle('ativo');

      if (detalhes.classList.contains('ativo')) {
        botao.textContent = 'Ocultar Informações';
      } else {
        botao.textContent = 'Saiba Mais';
      }
    });
  });
});
