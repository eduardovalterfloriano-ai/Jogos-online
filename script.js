// VARIÁVEL PARA CONTAR AS CURTIDAS
let quantidadeCurtidas = 0;

// SELECIONANDO OS ELEMENTOS DO HTML
const btnCurtir = document.getElementById('btn-curtir');
const contadorTexto = document.getElementById('contador-curtidas');
const textoBotao = document.getElementById('texto-botao');

// ADICIONANDO O EVENTO DE CLIQUE
btnCurtir.addEventListener('click', () => {
    // Incrementa +1
    quantidadeCurtidas++;

    // Atualiza o texto das curtidas
    if (quantidadeCurtidas === 1) {
        contadorTexto.textContent = "1 curtida";
        textoBotao.textContent = "Curtido!";
        btnCurtir.classList.add('curtido');
    } else {
        contadorTexto.textContent = `${quantidadeCurtidas} curtidas`;
    }
});
