const form = document.getElementById('loginForm');
const mensagemErro = document.getElementById('mensagemErro');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    if (usuario === 'admin' && senha === '1234') {
        localStorage.setItem('logado', 'true');
        window.location.href = 'catalogo.html';
    } else {
        mensagemErro.textContent = 'Usuário ou senha inválidos';
    }
});
