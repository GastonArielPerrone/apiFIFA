const express = require('express');
const fs = require('fs');
const { Server } = require('http');
const app = express();
const port = 3000;

// Cargar el archivo JSON
const jsonData = JSON.parse(fs.readFileSync('APIFIFA.json', 'utf8'));

// Ruta para obtener los datos
app.get(route='/api/data', (req, res) => {
  res.json(jsonData);
});

// Iniciar el servidor.
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}${route}`);
});