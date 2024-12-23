const form = document.getElementById('uploadForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const archivo = document.getElementById('fileInput').files[0];
    if (!archivo) {
        alert('Por favor selecciona un archivo.');
        return;
    }

    const formData = new FormData();
    formData.append('file', archivo);

    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        alert(data.mensaje);
    } catch (error) {
        console.error('Error:', error);
    }
});




