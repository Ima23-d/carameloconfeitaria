# Caramelo Confeitaria

Site institucional e vitrine online da **Caramelo Confeitaria** — confeitaria artesanal sob encomenda (loja 100% online, pedidos pelo WhatsApp).

## Tecnologias

- HTML5, CSS3 e JavaScript puro (sem build)
- Carrossel de produtos com [Splide.js](https://splidejs.com/) via CDN
- Fontes: Playfair Display + Montserrat (Google Fonts)

## Estrutura

```
confeitariacaramelo/
├── index.html        # Página única (hero, produtos, como encomendar, depoimentos)
├── css/estilo.css    # Estilos, responsivo e carrossel
├── js/principal.js   # Links de WhatsApp/Instagram, menu mobile e carrossel
└── imgs/             # Logo, foto do hero, fotos dos produtos e feedbacks
```

## Como executar

Abra o `index.html` no navegador ou suba um servidor local:

```bash
cd confeitariacaramelo
python3 -m http.server 8080
# acesse http://localhost:8080
```

> O carrossel (Splide) é carregado via CDN e precisa de internet para funcionar. Sem conexão, os produtos aparecem como lista.

## Funcionalidades

- Vitrine de produtos em carrossel (3 por vez no desktop, 1 no celular, sem setas no mobile)
- Botões com mensagem pronta para o WhatsApp por produto
- Menu mobile, layout responsivo e botão flutuante de WhatsApp
- Contato e Instagram configuráveis em `CONFIGURACAO` (`js/principal.js:2`)

## Membros

- Arthur Franco
- Felipe Torres
- Kevin Burgos
- Luiz Gustavo
- Pedro Henrique
- Vinicius Nascimento
