const path = require('path');
const fs = require('fs');

const deleteFileHandler  = (req, res) => {
    const nombreArchivo = req.params.name;
    const rutaArchivo = path.join(__dirname, '../uploads', nombreArchivo);

    if (!fs.existsSync(rutaArchivo)) {
        return res.status(404).json({ mensaje: 'Archivo no encontrado.' });
    }

    fs.unlinkSync(rutaArchivo);
    res.status(200).json({ mensaje: 'Archivo eliminado exitosamente.' });

};

module.exports = deleteFileHandler ;
