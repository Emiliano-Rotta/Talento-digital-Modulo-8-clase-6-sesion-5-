const fs = require('fs');
const path = require('path');

const registerUserHandler = (req, res) => {
    const { name } = req.body;
    const avatar = req.files ? req.files.avatar : null;

    if (!name || !avatar) {
        return res.status(400).json({ mensaje: 'Nombre y avatar son requeridos.' });
    }

    const nuevoNombreAvatar = `${Date.now()}-${avatar.name}`;
    const rutaAvatar = path.join(__dirname, '../avatars', nuevoNombreAvatar);

    // Mover el avatar a la carpeta avatars
    avatar.mv(rutaAvatar, (err) => {
        if (err) {
            return res.status(500).json({ mensaje: 'Error al guardar el avatar.', error: err });
        }

        // Leer o crear archivo JSON de usuarios
        const rutaUsuarios = path.join(__dirname, '../data/usuarios.json');
        let usuarios = [];
        if (fs.existsSync(rutaUsuarios)) {
            usuarios = JSON.parse(fs.readFileSync(rutaUsuarios));
        }

        // Agregar nuevo usuario
        usuarios.push({ name, avatar: nuevoNombreAvatar });
        fs.writeFileSync(rutaUsuarios, JSON.stringify(usuarios, null, 2));

        res.status(200).json({ mensaje: 'Usuario registrado exitosamente.', usuario: { name, avatar: nuevoNombreAvatar } });
    });
};

module.exports = registerUserHandler;
