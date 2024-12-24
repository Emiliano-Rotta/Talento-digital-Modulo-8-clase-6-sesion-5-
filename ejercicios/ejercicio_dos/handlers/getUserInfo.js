const fs = require('fs');
const path = require('path');

const getUserInfo = (req, res) => {
    const { correo } = req.params;

    const rutaArchivo = path.join(__dirname, '../data/usuarios.json');
    const usuarios = JSON.parse(fs.readFileSync(rutaArchivo, 'utf-8') || '[]');

    const usuario = usuarios.find(user => user.correo === correo);

    if (!usuario) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado.' });
    }

    res.status(200).json({
        nombre: usuario.nombre,
        correo: usuario.correo,
        edad: usuario.edad,
    });
};

module.exports = getUserInfo;
