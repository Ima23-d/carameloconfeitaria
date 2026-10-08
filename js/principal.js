/* ===== CONFIGURAÇÃO — edite apenas aqui ===== */
const CONFIGURACAO = {
  whatsapp: "558281226761",          
  whatsappExibido: "(82) 8122-6761",  
  instagram: "caramelodfra"     
};

const MENSAGEM_PADRAO = "Olá! Gostaria de fazer uma encomenda.";

/* ===== Botões de WhatsApp com mensagem pré-definida ===== */
function montarLinksWhatsapp() {
  const elementos = document.querySelectorAll("[data-whatsapp]");

  elementos.forEach((elemento) => {
    const mensagem = elemento.dataset.mensagem || MENSAGEM_PADRAO;
    elemento.href = `https://wa.me/${CONFIGURACAO.whatsapp}?text=${encodeURIComponent(mensagem)}`;
    elemento.target = "_blank";
    elemento.rel = "noopener";

    if (elemento.dataset.texto === "telefone") {
      elemento.textContent = CONFIGURACAO.whatsappExibido;
    }
  });
}

/* ===== Link do Instagram ===== */
function montarLinksInstagram() {
  const elementos = document.querySelectorAll("[data-instagram]");

  elementos.forEach((elemento) => {
    elemento.href = `https://instagram.com/${CONFIGURACAO.instagram}`;
    elemento.textContent = `@${CONFIGURACAO.instagram}`;
    elemento.target = "_blank";
    elemento.rel = "noopener";
  });
}

/* ===== Menu do celular ===== */
function configurarMenuCelular() {
  const botaoMenu = document.querySelector(".botao-menu");
  const menu = document.getElementById("menu");

  function definirMenuAberto(aberto) {
    menu.classList.toggle("menu--aberto", aberto);
    botaoMenu.setAttribute("aria-expanded", String(aberto));
    botaoMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  }

  botaoMenu.addEventListener("click", () => {
    definirMenuAberto(!menu.classList.contains("menu--aberto"));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => definirMenuAberto(false));
  });

  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") definirMenuAberto(false);
  });
}

/* ===== Carrossel de produtos (múltiplos slides) ===== */
function configurarCarrosselProdutos() {
  const carrossel = document.getElementById("carrossel-produtos");
  if (!carrossel || typeof Splide === "undefined") return;

  new Splide("#carrossel-produtos", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: "20px",
    pagination: true,
    arrows: true,
    breakpoints: {
      1024: { perPage: 2 },
      860: { perPage: 1, arrows: false },
    },
  }).mount();
}
/* ===== Carrossel de feedbacks ===== */

function iniciarCarrossel() {
    const cards = document.querySelectorAll(".avaliacao-card");
    const botoes = document.querySelectorAll(".carrossel-dots button");
    const botaoAnterior = document.querySelector(".carrossel-btn--prev");
    const botaoProximo = document.querySelector(".carrossel-btn--next");

    if (cards.length === 0) return;

    let indiceAtual = 0;

    function mostrarCard(indice) {
        cards.forEach((card, i) => {
            card.classList.toggle("ativa", i === indice);
        });

        botoes.forEach((botao, i) => {
            botao.classList.toggle("ativa", i === indice);
        });

        indiceAtual = indice;
    }

    if (botaoProximo) {
        botaoProximo.addEventListener("click", function () {
            mostrarCard((indiceAtual + 1) % cards.length);
        });
    }

    if (botaoAnterior) {
        botaoAnterior.addEventListener("click", function () {
            mostrarCard((indiceAtual - 1 + cards.length) % cards.length);
        });
    }

    botoes.forEach((botao, indice) => {
        botao.addEventListener("click", function () {
            mostrarCard(indice);
        });
    });

    mostrarCard(0);
}

document.addEventListener("DOMContentLoaded", iniciarCarrossel);


/* ===== Inicialização ===== */
montarLinksWhatsapp();
montarLinksInstagram();
configurarMenuCelular();
configurarCarrosselProdutos();  