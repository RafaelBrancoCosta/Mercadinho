if (localStorage.getItem('logado') !== 'true') {
    window.location.href = 'index.html';
}

const container = document.getElementById('produtos');

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        data.forEach(produto => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${produto.image}" alt="${produto.title}">
                <h3>${produto.title}</h3>
                <p>R$ ${produto.price.toFixed(2)}</p>
                <button onclick="adicionar(${produto.id}, '${produto.title}', ${produto.price}, '${produto.image}')">Adicionar ao carrinho</button>
            `;
            container.appendChild(card);
        });
    });

function adicionar(id, title, price, image) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push({ id, title, price, image });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert('Produto adicionado ao carrinho!');
}
