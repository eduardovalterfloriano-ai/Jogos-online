document.addEventListener('DOMContentLoaded', () => {
    console.log('Nexus Games inicializado!');

    // 1. Alternar estado ativo no menu
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 2. Dados dos jogos que serão inseridos na tela
    const jogos = [
        {
            titulo: 'Counter-Strike 2',
            categoria: 'FPS / Competitivo',
            imagem: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&q=80',
            link: '#'
        },
        {
            titulo: 'FURIA Esports',
            categoria: 'Notícias & Highlights',
            imagem: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&q=80',
            link: '#'
        }
    ];

    // 3. Renderização automática dos cards no HTML
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
