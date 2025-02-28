document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o recarregamento da página

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validação das credenciais (exemplo básico)
    if (username === 'admin' && password === 'admin') {
        // Salva o estado de login no localStorage/sessionStorage
        localStorage.setItem('isLoggedIn', 'true');
        
        // Redireciona para page.html
        window.location.href = 'page.html';
    } else {
        alert('Usuário ou senha incorretos!');
    }
});
