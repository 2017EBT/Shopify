const fetch = require('node-fetch');

const apiKey = "516e43ce0396a107889bc64b5773b16ab84e822c672f4a41df5c7752c121a74e"; // API Key als String

async function generatePDF() {
    try {
        const response = await fetch('https://api.pdfgeneratorapi.com/v4/documents', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`, // Richtig formatierte API-Key-Nutzung
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                template: {
                    id: 1316398, // Deine Template-ID
                    data: {
                        title: "Beispiel PDF",
                        content: "<p>Das ist ein Beispielinhalt.</p>",
                    },
                },
                format: 'pdf',
                output: 'url',
                name: 'Generated_PDF',
            }),
        });

        if (!response.ok) {
            throw new Error(`Fehler: ${response.statusText}`);
        }

        const result = await response.json();
        console.log('PDF URL:', result.response[0].public_url);
    } catch (error) {
        console.error('Fehler beim Generieren des PDFs:', error.message);
    }
}

generatePDF();


