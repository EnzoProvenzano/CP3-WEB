const produtos = [
    {
        nome: "Granito Preto São Gabriel",
        descricao: "Elegância e resistência para cozinhas.",
        preco: 899.90,
        imagem: "./src/assets/img/granito1.jpg"
    },

    {
        nome: "Mármore Branco Prime",
        descricao: "Sofisticação para ambientes internos.",
        preco: 1299.90,
        imagem: "./src/assets/img/marmore1.jpg"
    },

    {
        nome: "Granito Cinza Andorinha",
        descricao: "Excelente custo benefício.",
        preco: 749.90,
        imagem: "./src/assets/img/granito2.jpg"
    },

    {
        nome: "Mármore Travertino",
        descricao: "Visual moderno e refinado.",
        preco: 1499.90,
        imagem: "./src/assets/img/marmore2.jpg"
    },

    {
        nome: "Granito Branco Dallas",
        descricao: "Ideal para áreas gourmet.",
        preco: 999.90,
        imagem: "./src/assets/img/granito3.jpg"
    }
];

const cards = document.getElementById("cards");

if(cards){

    produtos.forEach(produto => {

        cards.innerHTML += `

            <div class="card">

                <img src="${produto.imagem}" alt="${produto.nome}">

                <div class="card-content">

                    <h3>${produto.nome}</h3>

                    <p>${produto.descricao}</p>

                    <p class="preco">
                        R$ ${produto.preco.toFixed(2)}
                    </p>

                </div>

            </div>

        `;
    });
}

const carrinho = [
    {
        nome: "Granito Preto São Gabriel",
        preco: 899.90
    },

    {
        nome: "Mármore Branco Prime",
        preco: 1299.90
    },

    {
        nome: "Granito Branco Dallas",
        preco: 999.90
    }
];

const listaCarrinho = document.getElementById("lista-carrinho");
const totalElemento = document.getElementById("total");
const btnDesconto = document.getElementById("btnDesconto");

if(listaCarrinho){

    carrinho.forEach(item => {

        listaCarrinho.innerHTML += `

            <div class="item-carrinho">

                <h3>${item.nome}</h3>

                <p>Preço: R$ ${item.preco.toFixed(2)}</p>

            </div>

        `;
    });

    let total = carrinho.reduce((acumulador, item) => {
        return acumulador + item.preco;
    }, 0);

    totalElemento.textContent = `R$ ${total.toFixed(2)}`;

    btnDesconto.addEventListener("click", () => {

        let desconto = total * 0.10;

        let totalFinal = total - desconto;

        totalElemento.textContent =
            `R$ ${totalFinal.toFixed(2)}`;
    });
}