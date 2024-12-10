const themeMode = () => {
    // Selecciona el botón y el body
    const toggleBtn = document.getElementById('toggleBtn');
    const body = document.body;

    // Cambia entre los modos claro y oscuro
    toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    });
};

themeMode();