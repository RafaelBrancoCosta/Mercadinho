//aula api
const div = document.getElementById('catalogo');
async function fetchProdutos(){
    try {
        const resposta = await fetch('https://fakestoreapi.com/products');
        const listaProdutos = await resposta.json();
        console.log(listaProdutos);
        imprimirVetor(listaProdutos);
    } catch (error) {
        console.error("Qual o erro? ", error);
        let h1 = document.createElement('h1');
        h1.textContent = 'Indisponivel, tente novamente mais tarde.';
        div.appendChild[h1];
    }
}

function imprimirVetor(vetor){
    div.innerHTML = "";

    vetor.forEach(element => {
        const divProduto = document.createElement('div');
        divProduto.className = "itemProduto";

        divProduto.innerHTML = 
            `<img src="${element.image}" alt="produto">
            <h2>${element.title}</h2>
            <button onclick="comprar()">Comprar</button>
        `;
        div.appendChild(divProduto);    
    });
}
fetchProdutos();