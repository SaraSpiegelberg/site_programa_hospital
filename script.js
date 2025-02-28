document.getElementById('fetch-data').addEventListener('click', function() {
    fetch('https://minha-api-9sv0.onrender.com')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('data-container');
            container.innerHTML = ''; // Limpa o conteúdo anterior
            data.forEach(item => {
                const div = document.createElement('div');
                div.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
                container.appendChild(div);
            });
        })
        .catch(error => console.error('Erro ao buscar dados:', error));
});