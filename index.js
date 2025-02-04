const response = await fetch('https://api.example.com/endpoint', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer 516e43ce0396a107889bc64b5773b16ab84e822c672f4a41df5c7752c121a74e`, // Zugriffstoken hier einfügen
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    // Daten für die API-Anfrage
  }),
});
