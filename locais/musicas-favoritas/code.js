const lista = document.getElementById("lista-musicas");
const player = document.getElementById("iframe-player");

console.log(musicas.length);

// Organiza as músicas por pasta
const pastas = {};

musicas.forEach((musica) => {
    if (musica.pasta) {
        if (!pastas[musica.pasta]) {
            pastas[musica.pasta] = [];
        }

        pastas[musica.pasta].push(musica);
    }
});

// Cria as pastas
Object.keys(pastas).forEach((nomePasta) => {

    const pasta = document.createElement("p");

    pasta.textContent = "📁 " + nomePasta;
    pasta.style.cursor = "pointer";

    const musicasDaPasta = document.createElement("div");

    musicasDaPasta.style.display = "none";
    musicasDaPasta.style.marginLeft = "20px";

    // Cria as músicas dentro da pasta
    pastas[nomePasta].forEach((musica) => {

        const p = document.createElement("p");

        p.textContent = "▶ " + musica.nome;
        p.style.cursor = "pointer";

        p.onclick = () => {
            player.src = musica.link;

            player.scrollIntoView({
                behavior: "smooth"
            });
        };

        musicasDaPasta.appendChild(p);
    });

    // Abrir/fechar pasta
    pasta.onclick = () => {

        if (musicasDaPasta.style.display === "none") {
            musicasDaPasta.style.display = "block";
        } else {
            musicasDaPasta.style.display = "none";
        }

    };

    lista.appendChild(pasta);
    lista.appendChild(musicasDaPasta);
});


// Músicas que NÃO possuem pasta
musicas.forEach((musica) => {

    if (!musica.pasta) {

        const p = document.createElement("p");

        p.textContent = musica.nome;
        p.style.cursor = "pointer";

        p.onclick = () => {
            player.src = musica.link;

            player.scrollIntoView({
                behavior: "smooth"
            });
        };

        lista.appendChild(p);
    }

});
