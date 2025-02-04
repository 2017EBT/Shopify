const response = await fetch('https://api.example.com/endpoint', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer shp_bb0534cf-2208-48ee-9f87-322683bd302f`, // Zugriffstoken hier einfügen
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    // Daten für die API-Anfrage
  }),
});
