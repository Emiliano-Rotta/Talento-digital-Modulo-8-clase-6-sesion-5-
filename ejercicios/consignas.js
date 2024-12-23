// Ejercicio 1: Sistema de Gestión de Usuarios con Avatares
// Consigna:
// Desarrolla una aplicación Express que permita gestionar usuarios y sus avatares en un servidor. El sistema debe incluir las siguientes funcionalidades:
// Registrar un usuario:
// Debe recibir el nombre del usuario y un archivo de imagen como avatar.
// El avatar se guardará en una carpeta llamada avatars en el servidor, y su nombre se renombrará automáticamente con una marca de tiempo.
// Los datos del usuario (nombre y ruta del avatar) se almacenarán en un archivo JSON llamado usuarios.json.
// Si el archivo usuarios.json no existe, debe crearse automáticamente.
// Consultar información de un usuario por su nombre:
// Al especificar el nombre del usuario en la URL, se debe devolver:
// Nombre del usuario.
// Ruta del avatar en el servidor.
// Si el usuario no existe, debe devolver un mensaje de error.
// Eliminar un usuario por su nombre:
// Al especificar el nombre del usuario en la URL, se eliminará tanto la entrada en el archivo usuarios.json como el avatar asociado en la carpeta avatars.
// Si el usuario no existe, debe devolver un mensaje de error.
// Estructura modular del proyecto:
// Archivo principal: index.js.
// Controladores en la carpeta handlers:
// registerUserHandler.js: Manejo del registro de usuarios.
// getUserHandler.js: Consultar información de usuarios.
// deleteUserHandler.js: Eliminar usuarios y sus avatares.
// Interfaz web:
// Un archivo index.html permitirá registrar usuarios cargando su nombre y avatar.


// Ejercicio 2: Sistema de Gestión de Usuarios con Express
// Consigna
// Desarrolla una aplicación Express que permita gestionar usuarios en el servidor. El sistema debe incluir las siguientes funcionalidades:
// Registrar un usuario:
// El usuario enviará un nombre, un correo electrónico y una edad.
// Los datos se almacenarán en un archivo usuarios.json en la carpeta data.
// Si el correo ya existe, se devolverá un error indicando que no se pueden registrar duplicados.
// Obtener información de un usuario:
// A través de una ruta /usuario/:correo, se buscará por correo.
// Si el usuario existe, se devolverá:
// Nombre.
// Edad.
// Correo electrónico.
// Si no existe, se devolverá un mensaje de error.
// Eliminar un usuario:
// Al enviar un correo en la ruta /usuario/:correo (método DELETE), se eliminará al usuario.
// Si el correo no está registrado, se devolverá un mensaje de error.
// Estructura modular:
// Archivo principal: index.js.
// Controladores en la carpeta handlers:
// registerUser.js: Manejo del registro de usuarios.
// getUserInfo.js: Consultar información del usuario.
// deleteUser.js: Eliminar usuario.
// Estructura del proyecto:
// markdown
// Copiar código
// - index.js
// - handlers/
//   - registerUser.js
//   - getUserInfo.js
//   - deleteUser.js
// - data/
//   - usuarios.json
