const produtos = [
    {
        nome: "Granito Preto São Gabriel",
        descricao: "Elegância e resistência para cozinhas.",
        preco: "R$ 899,90",
        imagem: "./src/assets/img/granito1.jpg"
    },

    {
        nome: "Mármore Branco Prime",
        descricao: "Sofisticação para ambientes internos.",
        preco: "R$ 1.299,90",
        imagem: "./src/assets/img/marmore1.jpg"
    },

    {
        nome: "Granito Cinza Andorinha",
        descricao: "Excelente custo benefício.",
        preco: "R$ 749,90",
        imagem: "./src/assets/img/granito2.jpg"
    },

    {
        nome: "Mármore Travertino",
        descricao: "Visual moderno e refinado.",
        preco: "R$ 1.499,90",
        imagem: "./src/assets/img/marmore2.jpg"
    },

    {
        nome: "Granito Branco Dallas",
        descricao: "Ideal para áreas gourmet.",
        preco: "R$ 999,90",
        imagem: "./src/assets/img/granito3.jpg"
    }
];

const cards = document.getElementById("cards");

produtos.forEach(produto => {

    cards.innerHTML += `

        <div class="card">

            <img src="${produto.imagem}" alt="${produto.nome}">

            <div class="card-content">

                <h3>${produto.nome}</h3>

                <p>${produto.descricao}</p>

                <p class="preco">${produto.preco}</p>

            </div>

        </div>

    `;
});