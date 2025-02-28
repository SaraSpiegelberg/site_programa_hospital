document.getElementById('fetch-data').addEventListener('click', async () => {
    try {
        const response = await fetch('https://minha-api-9sv0.onrender.com/relatorio', {
            method: 'GET', // Use GET se você estiver buscando dados
        });

        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.status);
        }

        const data = await response.json();
        document.getElementById('data-container').innerHTML = `
            <h2>Dados Recebidos:</h2>
            <pre>${JSON.stringify(data, null, 2)}</pre>
        `;
    } catch (error) {
        console.error('Erro:', error);
        document.getElementById('data-container').innerHTML = `
            <h2>Erro ao buscar dados</h2>
            <p>${error.message}</p>
        `;
    }
});
