const carrinhoDiv = document.getElementById('carrinho');
const totalH2 = document.getElementById('total');

let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function atualizarCarrinho() {
    carrinhoDiv.innerHTML = '';
    let total = 0;

    carrinho.forEach((item, index) => {
        total += item.price;
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>R$ ${item.price.toFixed(2)}</p>
            <button onclick="remover(${index})">Remover</button>
        `;
        carrinhoDiv.appendChild(div);
    });

    totalH2.textContent = `Total: R$ ${total.toFixed(2)}`;
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function remover(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

atualizarCarrinho();
