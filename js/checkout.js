const resumo = document.getElementById('resumo');
const mensagem = document.getElementById('mensagem');
const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

let total = 0;

carrinho.forEach(item => {
    total += item.price;
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
        <h3>${item.title}</h3>
        <p>R$ ${item.price.toFixed(2)}</p>
    `;
    resumo.appendChild(div);
});

const totalH2 = document.createElement('h2');
totalH2.textContent = `Total: R$ ${total.toFixed(2)}`;
resumo.appendChild(totalH2);

document.getElementById('checkoutForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const pagamento = document.getElementById('pagamento').value;

    if (nome && endereco && pagamento) {
        localStorage.removeItem('carrinho');
        mensagem.textContent = '✅ Pedido realizado com sucesso!';
        resumo.innerHTML = '';
        e.target.reset();
    }
});
