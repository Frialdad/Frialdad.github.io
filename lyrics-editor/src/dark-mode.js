// Función para activar/desactivar el modo oscuro con el toggle
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  // Llama a las funciones correspondientes para actualizar el estado y la cookie
  if (body.classList.contains('dark-mode')) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}

// Función para activar el modo oscuro
function enableDarkMode() {
  document.querySelector('.button-container').classList.add('dark-mode');
  document.cookie = "darkModeEnabled=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}

// Función para desactivar el modo oscuro
function disableDarkMode() {
  document.querySelector('.button-container').classList.remove('dark-mode');
  document.cookie = "darkModeEnabled=false; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}

// Función para verificar el estado del modo oscuro desde las cookies
function checkDarkModeFromCookies() {
  const darkModeCookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('darkModeEnabled='));

  const darkModeToggle = document.getElementById('dark-mode-toggle');

  if (darkModeCookie) {
    const darkModeEnabled = darkModeCookie.split('=')[1];
    const body = document.body;

    if (darkModeEnabled === 'true') {
      body.classList.add('dark-mode');
      darkModeToggle.checked = true;
    } else {
      body.classList.remove('dark-mode');
      darkModeToggle.checked = false;
    }
  }
}

// Llamada a la función para verificar el estado del modo oscuro al cargar la página
window.addEventListener('load', checkDarkModeFromCookies);
