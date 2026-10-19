const personagens = {
    cesar: {
        nome: "Júlio César",
        imagem: "images/julio.jpeg",
        historia: "Júlio César foi um general e político romano que viveu entre 100 a.C. e 44 a.C. Ficou conhecido por suas conquistas militares, especialmente na Gália, e por sua influência na transformação da República Romana. Seu assassinato, em 44 a.C., foi um dos acontecimentos marcantes da crise que levou ao fim da República.",
        marcos: [
            "Conquista de territórios na Gália.",
            "Vitória na guerra civil romana.",
            "Reformas políticas e administrativas.",
            "Seu governo contribuiu para a crise final da República Romana."
        ]
    },

    leonardo: {
        nome: "Leonardo da Vinci",
        imagem: "images/leonardo.jpg",
        historia: "Leonardo da Vinci (1452–1519) foi um artista, inventor e estudioso italiano do Renascimento. Sua curiosidade o levou a investigar a pintura, a anatomia, a engenharia e a natureza. Suas obras continuam sendo referências da arte mundial.",
        marcos: [
            "Pintura da Mona Lisa.",
            "Criação de A Última Ceia.",
            "Estudos de anatomia e engenharia.",
            "Contribuição artística e científica para o Renascimento."
        ]
    },

    michelangelo: {
        nome: "Michelangelo",
        imagem: "images/Michelangelo.jpg",
        historia: "Michelangelo Buonarroti (1475–1564) foi um escultor, pintor e arquiteto italiano. Considerado uma das grandes figuras do Renascimento, destacou-se pela representação da figura humana e pela grandiosidade de suas obras.",
        marcos: [
            "Escultura de Davi.",
            "Escultura Pietà.",
            "Pinturas do teto da Capela Sistina.",
            "Participação na arquitetura da Basílica de São Pedro."
        ]
    },

    garibaldi: {
        nome: "Giuseppe Garibaldi",
        imagem: "images/Giuseppe.jpeg",
        historia: "Giuseppe Garibaldi (1807–1882) foi um militar e líder político que teve papel importante no processo de unificação italiana no século XIX. Suas campanhas, especialmente a Expedição dos Mil, contribuíram para a incorporação de territórios ao futuro Reino da Itália.",
        marcos: [
            "Participação no movimento de unificação italiana.",
            "Liderança da Expedição dos Mil em 1860.",
            "Conquista de territórios no sul da península Itálica.",
            "Contribuição para a formação da Itália unificada."
        ]
    }
};

function abrirPersonagem(id) {
    const personagem = personagens[id];

    if (!personagem) return;

    document.getElementById("titulo-modal").textContent =
        personagem.nome;

    document.getElementById("imagem-modal").src =
        personagem.imagem;

    document.getElementById("imagem-modal").alt =
        personagem.nome;

    document.getElementById("historia-modal").textContent =
        personagem.historia;

    const lista = document.getElementById("marcos-modal");
    lista.replaceChildren();

    personagem.marcos.forEach(function(marco) {
        const item = document.createElement("li");
        item.textContent = marco;
        lista.appendChild(item);
    });

    document.getElementById("fundo-modal").classList.add("ativo");
    document.body.style.overflow = "hidden";
}

function fecharPersonagem() {
    document.getElementById("fundo-modal").classList.remove("ativo");
    document.body.style.overflow = "";
}

function fecharAoClicarFora(event) {
    if (event.target.id === "fundo-modal") {
        fecharPersonagem();
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        fecharPersonagem();
    }
});