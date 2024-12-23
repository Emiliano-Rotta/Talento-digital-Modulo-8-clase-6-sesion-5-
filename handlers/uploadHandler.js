const fs = require('fs')
const path = require('path')

const uploadHandler = (req, res) => {
    if (!req.files || !req.files.file) {
        return res.status(400).json({ mensaje: 'No se subió ningún archivo.' });
    }

    const archivo = req.files.file;
    const nuevoNombre = `${Date.now()}-${archivo.name}`;
    const rutaDestino = path.join(__dirname, '../uploads', nuevoNombre);

    archivo.mv(rutaDestino, (err) => {
        if (err) {
            return res.status(500).json({ mensaje: 'Error al subir el archivo.', error: err });
        }

        res.status(200).json({ mensaje: 'Archivo subido exitosamente.', nombreArchivo: nuevoNombre });
    });
};

module.exports = uploadHandler;

