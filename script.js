document.getElementById('fetch-data').addEventListener('click', async () => {
    try {
        const response = await fetch('http://127.0.0.1:5000/relatorio', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: "Paciente Teste",
                leito: "101",
                lucidez: "LOC",
                movimento: "Deambula",
                dieta: "Aceita",
                algia: "Leve",
                diurese: "Presente",
                intestinais: "Presente",
                acesso: "MSD",
                ventilacao: "AA",
                pressaoSistolica: "120",
                pressaoDiastolica: "80",
                frequenciaCardiaca: "75",
                saturacao: "98",
                temperatura: "36.5",
                historico: ["Histórico 1", "Histórico 2"],
                exames: ["Exame 1", "Exame 2"],
                observacoes: ["Observação 1", "Observação 2"],
            }),
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
