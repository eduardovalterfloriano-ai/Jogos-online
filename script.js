let curtidas = 0;

const btnCurtir = document.getElementById('btn-curtir');
const contador = document.getElementById('contador-curtidas');

btnCurtir.addEventListener('click', () => {
    curtidas++;
    contador.textContent = `${curtidas} curtidas`;
});
