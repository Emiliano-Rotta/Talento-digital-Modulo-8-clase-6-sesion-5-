const fs = require('fs');
const path = require('path');

const registerUser = (req, res) => {
    const { nombre, correo, edad } = req.body;

    if (!nombre || !correo || !edad) {
        return res.status(400).json({ mensaje: 'Todos los campos son obligatorios.' });
    }

    const rutaArchivo = path.join(__dirname, '../data/usuarios.json');
    const usuarios = JSON.parse(fs.readFileSync(rutaArchivo, 'utf-8') || '[]');

    if (usuarios.find(user => user.correo === correo)) {
        return res.status(400).json({ mensaje: 'El correo ya está registrado.' });
    }

    const nuevoUsuario = { nombre, correo, edad };
    usuarios.push(nuevoUsuario);

    fs.writeFileSync(rutaArchivo, JSON.stringify(usuarios, null, 2));
    res.status(201).json({ mensaje: 'Usuario registrado exitosamente.', usuario: nuevoUsuario });
};

module.exports = registerUser;
