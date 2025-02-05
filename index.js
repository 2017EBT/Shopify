const fetch = require('node-fetch'); // Node-Fetch korrekt importieren

const apiKey = "516e43ce0396a107889bc64b5773b16ab84e822c672f4a41df5c7752c121a74e";

async function generatePDF() {
    try {
        const response = await fetch('https://us1.pdfgeneratorapi.com/api/v4/documents/generate', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`, // API-Key
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                template: {
                    id: 1316398, // Deine Template-ID
                    data: {
                        Name: "Max Mustermann", // Beispiel-Daten
                        DueDate: "2025-02-04",
                    },
                },
                format: "pdf", // Ausgabeformat
                output: "url", // URL des generierten PDFs
                name: "Generated_PDF", // Name des PDFs
            }),
        });

        if (!response.ok) {
            throw new Error(`Fehler: ${response.statusText}`);
        }

        const result = await response.json();
        console.log('✅ PDF URL:', result.response[0].public_url);
    } catch (error) {
        console.error('❌ Fehler beim Generieren des PDFs:', error.message);
    }
}

generatePDF();



