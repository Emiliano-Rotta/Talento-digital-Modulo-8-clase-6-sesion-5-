const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');

const registerUserHandler = require('./handlers/registerUserHandler');
const getUserHandler = require('./handlers/getUserHandler');
const deleteUserHandler = require('./handlers/deleteUserHandler');

const app = express();
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Rutas
app.post('/register', registerUserHandler);
app.get('/user/:name', getUserHandler);
app.delete('/user/:name', deleteUserHandler);

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
