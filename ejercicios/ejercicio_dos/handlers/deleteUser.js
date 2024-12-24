const fs = require('fs');
const path = require('path');

const deleteUser = (req, res) => {
    const { correo } = req.params;

    const rutaArchivo = path.join(__dirname, '../data/usuarios.json');
    const usuarios = JSON.parse(fs.readFileSync(rutaArchivo, 'utf-8') || '[]');

    const index = usuarios.findIndex(user => user.correo === correo);

    if (index === -1) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado.' });
    }

    usuarios.splice(index, 1);
    fs.writeFileSync(rutaArchivo, JSON.stringify(usuarios, null, 2));

    res.status(200).json({ mensaje: 'Usuario eliminado exitosamente.' });
};

module.exports = deleteUser;
