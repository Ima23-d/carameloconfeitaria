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

/* ===== Inicialização ===== */
montarLinksWhatsapp();
montarLinksInstagram();
configurarMenuCelular();