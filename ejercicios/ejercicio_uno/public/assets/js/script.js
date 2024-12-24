const form = document.getElementById('registerForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('nameInput').value;
    const avatar = document.getElementById('avatarInput').files[0];

    if (!name || !avatar) {
        alert('Por favor ingresa un nombre y selecciona un avatar.');
        return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('avatar', avatar);

    try {
        const response = await fetch('/register', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        alert(data.mensaje);
    } catch (error) {
        console.error('Error:', error);
    }
});
