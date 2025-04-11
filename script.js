function sendEmail(event) {
  event.preventDefault();

  const serviceID = "service_hq084cm"; // Reemplaza con tu Service ID
  const templateID = "template_anemfpo"; // Reemplaza con tu Template ID
  const userID = "VgZeNzMQ8aV5d6uKq"; // Reemplaza con tu Public Key

  const formData = {
      service_id: serviceID,
      template_id: templateID,
      user_id: userID,
      template_params: {
          name: document.getElementById("name").value,
          from_name: document.getElementById("from_name").value,
          message: document.getElementById("message").value
      }
  };

  fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
  })
  .then(response => response.text()) // ⚠️ Cambié de .json() a .text()
  .then(text => {
      if (text === "OK") {
          alert("Correo enviado con éxito!");
      } else {
          throw new Error("Respuesta inesperada: " + text);
      }
  })
  .catch(error => {
      alert("Error al enviar el correo: " + error.message);
  });
}