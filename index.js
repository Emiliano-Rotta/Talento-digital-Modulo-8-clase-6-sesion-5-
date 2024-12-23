// Ejercicio 1: Sistema de Gestión de Archivos en un Servidor Express

// Consigna

// Desarrolla una aplicación Express que permita gestionar archivos en un servidor. Debe incluir las siguientes funcionalidades:

// Subir un archivo:
// El usuario puede subir cualquier tipo de archivo.
// El archivo se guardará en una carpeta llamada uploads del servidor.
// El archivo será renombrado automáticamente con una marca de tiempo para evitar conflictos.

// Consultar información del archivo:
// Al especificar el nombre de un archivo en la URL, se mostrará:
// Nombre del archivo.
// Tamaño en kilobytes.
// Fecha de creación.

// Eliminar un archivo:
// Al especificar el nombre de un archivo en la URL, se eliminará del servidor.
// Si el archivo no existe, se mostrará un mensaje de error.

// Estructura modular:
// Archivo principal: index.js.
// Controladores en la carpeta handlers:
// uploadHandler.js: Manejo de subida de archivos.
// fileInfoHandler.js: Consultar información del archivo.
// deleteFileHandler.js: Eliminar archivos.
// Interfaz web:
// Un archivo index.html permitirá subir archivos y visualizar información básica.


const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const PORT = 3000

const uploadHandler = require('./handlers/uploadHandler.js');
const fileInfoHandler = require('./handlers/fileInfoHandler');
const deleteFileHandler = require('./handlers/deleteFileHandler')

const app = express();
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'public')));


app.post('/upload', uploadHandler)
app.get('/file/:name', fileInfoHandler)
app.delete('/file/:name', deleteFileHandler)


app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto: ${PORT}`)
});

