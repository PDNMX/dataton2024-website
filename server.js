require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes');  // Importa el archivo de rutas

app.use(express.static('public'));

app.use('/', routes);  // Usa las rutas definidas en routes.js

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
