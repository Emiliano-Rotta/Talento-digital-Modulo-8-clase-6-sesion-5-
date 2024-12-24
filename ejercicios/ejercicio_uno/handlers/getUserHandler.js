const fs = require('fs');
const path = require('path');

const getUserHandler = (req, res) => {
    const { name } = req.params;
    const rutaUsuarios = path.join(__dirname, '../data/usuarios.json');

    if (!fs.existsSync(rutaUsuarios)) {
        return res.status(404).json({ mensaje: 'No se encontraron usuarios registrados.' });
    }

    const usuarios = JSON.parse(fs.readFileSync(rutaUsuarios));
    const usuario = usuarios.find(u => u.name === name);

    if (!usuario) {
        return res.status(404).json({ mensaje: `Usuario "${name}" no encontrado.` });
    }

    res.status(200).json({
        nombre: usuario.name,
        avatar: path.join('/avatars', usuario.avatar),
    });
};

module.exports = getUserHandler;
