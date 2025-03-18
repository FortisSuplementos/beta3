document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const result = await response.json();
    showAlert(result.message); // Mostrar mensaje de respuesta
});

document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const result = await response.json();
    showAlert(result.message); // Mostrar mensaje de respuesta

    if (result.message === 'Inicio de sesión exitoso') {
        window.location.href = 'index.html'; // Redirigir a la página de inicio
    }
});

function showAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.textContent = message;
    alertBox.style.backgroundColor = '#f0f0f0';
    alertBox.style.border = '1px solid #ddd';
    alertBox.style.padding = '10px';
    alertBox.style.marginTop = '10px';
    alertBox.style.textAlign = 'center';
    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.remove();
    }, 3000); // Eliminar la alerta después de 3 segundos
}


document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const result = await response.json();
    showAlert(result.message);

    if (result.message === 'Inicio de sesión exitoso') {
        sessionStorage.setItem('username', username); // Guardar el nombre de usuario en el sessionStorage
        window.location.href = 'index.html';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const username = sessionStorage.getItem('username');
    if (username) {
        const userButton = document.getElementById('accountBtn');
        const userImage = document.getElementById('accounImg');
        userImage.style.display = 'none'; // Ocultar la imagen
        const initial = document.createElement('div');
        initial.classList.add('initial');
        initial.textContent = username.charAt(0).toUpperCase(); // Mostrar la inicial del nombre de usuario
        userButton.appendChild(initial);
        initial.style.display = 'block'; // Mostrar la inicial
    }
});

function showAlert(message) {
    const alertBox = document.createElement('div');
    alertBox.textContent = message;
    alertBox.style.backgroundColor = '#f0f0f0';
    alertBox.style.border = '1px solid #ddd';
    alertBox.style.padding = '10px';
    alertBox.style.marginTop = '10px';
    alertBox.style.textAlign = 'center';
    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.remove();
    }, 3000);
}

function change() {
    const form1 = document.getElementById('form1')
    const form2 = document.getElementById('form2')
    
    form1.classList.toggle('oculto');
    form2.classList.toggle('oculto');
}