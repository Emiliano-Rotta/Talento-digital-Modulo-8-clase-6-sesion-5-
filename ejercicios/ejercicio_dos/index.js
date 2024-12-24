const express = require('express');
const fs = require('fs');
const path = require('path');

const registerUser = require('./handlers/registerUser');
const getUserInfo = require('./handlers/getUserInfo');
const deleteUser = require('./handlers/deleteUser');

const app = express();

app.use(express.json());

// Rutas
app.post('/usuario', registerUser);
app.get('/usuario/:correo', getUserInfo);
app.delete('/usuario/:correo', deleteUser);

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

