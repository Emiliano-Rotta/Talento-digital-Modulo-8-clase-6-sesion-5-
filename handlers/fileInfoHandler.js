const path = require('path');
const fs = require('fs');

const fileInfoHandler = (req, res) => {
    const nombreArchivo = req.params.name;
    const rutaArchivo = path.join(__dirname, '../uploads', nombreArchivo);

    if (!fs.existsSync(rutaArchivo)) {
        return res.status(404).json({ mensaje: 'Archivo no encontrado.' });
    }

    const stats = fs.statSync(rutaArchivo);
    res.status(200).json({
        nombre: nombreArchivo,
        tamañoKB: (stats.size / 1024).toFixed(2),
        fechaCreación: stats.birthtime,
    });
};

module.exports = fileInfoHandler;
