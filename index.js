document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registro");
  
    form.addEventListener("submit", () => {
      const nombre = document.getElementById("nombre").value;
      const apellido = document.getElementById("apellido").value;
      const fechaNacimiento = document.getElementById("fecha").value;
  
      const data = {
        nombre,
        apellido,
        fechaNacimiento,
      };
  
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
    });
  });