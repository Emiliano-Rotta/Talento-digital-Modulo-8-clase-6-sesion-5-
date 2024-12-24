const fs = require('fs');
const path = require('path');

const deleteUserHandler = (req, res) => {
    const { name } = req.params;
    const rutaUsuarios = path.join(__dirname, '../data/usuarios.json');

    if (!fs.existsSync(rutaUsuarios)) {
        return res.status(404).json({ mensaje: 'No se encontraron usuarios registrados.' });
    }

    let usuarios = JSON.parse(fs.readFileSync(rutaUsuarios));
    const usuario = usuarios.find(u => u.name === name);

    if (!usuario) {
        return res.status(404).json({ mensaje: `Usuario "${name}" no encontrado.` });
    }

    // Eliminar avatar
    const rutaAvatar = path.join(__dirname, '../avatars', usuario.avatar);
    if (fs.existsSync(rutaAvatar)) {
        fs.unlinkSync(rutaAvatar);
    }

    // Eliminar usuario del JSON
    usuarios = usuarios.filter(u => u.name !== name);
    fs.writeFileSync(rutaUsuarios, JSON.stringify(usuarios, null, 2));

    res.status(200).json({ mensaje: `Usuario "${name}" eliminado exitosamente.` });
};

module.exports = deleteUserHandler;
