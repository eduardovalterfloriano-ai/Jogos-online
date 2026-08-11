// Aguarda todo o HTML da página carregar antes de executar a lógica
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Variável para guardar a quantidade de curtidas
    let quantidadeCurtidas = 0;

    // 2. Mapeia os elementos do HTML pelos seus IDs
    const btnCurtir = document.getElementById('btn-curtir');
    const textoContador = document.getElementById('contador-curtidas');
    const textoBotao = document.getElementById('texto-botao');

    // 3. Verifica se os elementos existem na página antes de adicionar a ação
    if (btnCurtir && textoContador) {
        
        btnCurtir.addEventListener('click', () => {
            // Incrementa +1 a cada clique
            quantidadeCurtidas++;

            // Atualiza o texto do contador no HTML
            if (quantidadeCurtidas === 1) {
                textoContador.textContent = "1 curtida";
                if (textoBotao) textoBotao.textContent = "Curtido!";
            } else {
                textoContador.textContent = `${quantidadeCurtidas} curtidas`;
            }

            // Animação/Efeito visual simples de clique
            btnCurtir.style.transform = "scale(0.95)";
            setTimeout(() => {
                btnCurtir.style.transform = "scale(1)";
            }, 100);
        });

    } else {
        console.warn("Elementos do botão de curtir não foram encontrados no HTML.");
    }

});
