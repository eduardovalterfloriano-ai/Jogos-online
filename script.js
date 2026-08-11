document.addEventListener('DOMContentLoaded', () => {
    console.log('Nexus Games carregado com sucesso!');

    // 1. Destacar o link ativo do menu
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 2. Exemplo de lista de jogos para renderizar na tela
    const jogos = [
        {
            titulo: 'Counter-Strike 2',
            categoria: 'FPS',
            imagem: 'https://via.placeholder.com/300x180',
            link: '#'
        },
        {
            titulo: 'FURIA Esports Highlights',
            categoria: 'Notícias / CS2',
            imagem: 'https://via.placeholder.com/300x180',
            link: '#'
        }
    ];

    // Função para carregar os jogos no container (se existir no seu HTML)
    const containerJogos = document.getElementById('grid-jogos');

    if (containerJogos) {
        jogos.forEach(jogo => {
            const card = document.createElement('div');
            card.classList.add('card-jogo');

            card.innerHTML = `
                <img src="${jogo.imagem}" alt="${jogo.titulo}">
                <div class="card-info">
                    <span class="categoria">${jogo.categoria}</span>
                    <h3>${jogo.titulo}</h3>
                    <a href="${jogo.link}" class="btn-jogar">Acessar</a>
                </div>
            `;

            containerJogos.appendChild(card);
        });
    }
});
