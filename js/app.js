'use strict'

let plantilla = document.querySelector("template"); 
let contenedor = document.querySelector("tbody");

  /* Importación de datos */
function cargarDatos() {
  fetch("https://raw.githubusercontent.com/FRomero999/ExamenDIW2022/main/clientes.json")
  .then(response => response.json())
    .then(data => {
      data.forEach(function (el) {

        let wrap = document.createElement("tr");

        let nuevoCliente = plantilla.content.cloneNode(true);
        
        nuevoCliente.querySelector(".celdaNombre").textContent = el.nombre;
        nuevoCliente.querySelector(".celdaApellidos").textContent = el.apellidos;
        nuevoCliente.querySelector(".spanSexo").textContent = el.sexo;
        nuevoCliente.querySelector(".celdaEdad").textContent = el.edad;
        nuevoCliente.querySelector(".celdaAltura").textContent = el.altura;
        nuevoCliente.querySelector(".celdaPeso").textContent = el.peso;
        nuevoCliente.querySelector(".spanActividad").textContent = el.actividad;

        // Se crea una funcion para calcular el metabolismo GER
        const metabolismoGER = function (peso, altura, edad, sexo) {
          if (sexo === 'hombre') {
            return Math.floor(66.473 + (13.751 * peso) + (5.0033 * altura) - (6.755 * edad));
          } else if (sexo === 'mujer') {
            return Math.floor(655.0955 + (9.463 * peso) + (1.8496 * altura) - (4.6756 * edad));
          } else {
            return "Error en el cálculo";
          }
        };

        // Se crea una funcion para calcular el metabolismo GET
        const metabolismoGET = function (nivelActividad, metabolismoGER, sexo) {
          if (nivelActividad === "sedentaria" && sexo === 'hombre') {
            return Math.floor(metabolismoGER * 1.3);
          } else if (nivelActividad === "ligera" && sexo === 'hombre') {
            return Math.floor(metabolismoGER * 1.6);
          } else if (nivelActividad === "moderada" && sexo === 'hombre') {
            return Math.floor(metabolismoGER * 1.7);
          } else if (nivelActividad === "intensa" && sexo === 'hombre') {
            return Math.floor(metabolismoGER * 2.1);
          } else if (nivelActividad === "sedentaria" && sexo === 'mujer') {
            return Math.floor(metabolismoGER * 1.3);
          } else if (nivelActividad === "ligera" && sexo === 'mujer') {
            return Math.floor(metabolismoGER * 1.5);
          } else if (nivelActividad === "moderada" && sexo === 'mujer') {
            return Math.floor(metabolismoGER * 1.6);
          } else if (nivelActividad === "intensa" && sexo === 'mujer') {
            return Math.floor(metabolismoGER * 1.9);
          } else {
            return "Error en el cálculo";
          }
        };

        const calculoGER = metabolismoGER(el.peso, el.altura, el.edad, el.sexo);
        nuevoCliente.querySelector(".celdaGET").textContent = metabolismoGET(el.actividad, calculoGER, el.sexo);
        nuevoCliente.querySelector(".celdaGER").textContent = calculoGER;

        wrap.appendChild(nuevoCliente);       
        contenedor.appendChild(wrap);

      });
    })
    .catch(err => {
        alert("Hubo un error: " + err + ". Recargue la página.");
    });
  };

document.addEventListener("DOMContentLoaded", cargarDatos);

const btnCarga = document.querySelector("#carga");
btnCarga.addEventListener("click", cargarDatos);

const botonInsert = document.querySelector("#insertClient");

botonInsert.addEventListener("click", () => {

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        // Se obtienen los datos del formulario
        const nombreCliente = document.querySelector("#nombre").value;
        const apellidosCliente = document.querySelector("#apellidos").value;
        const sexoCliente = document.querySelector("#sexo").value;
        const actividadCliente = document.querySelector("#actividad").value;
        const edadCliente = document.querySelector("#edad").value;
        const pesoCliente = document.querySelector("#peso").value;
        const alturaCliente = document.querySelector("#altura").value;

        let wrap = document.createElement("tr");

        let nuevoCliente = plantilla.content.cloneNode(true);
        
        nuevoCliente.querySelector(".celdaNombre").textContent = nombreCliente;
        nuevoCliente.querySelector(".celdaApellidos").textContent = apellidosCliente;
        nuevoCliente.querySelector(".spanSexo").textContent = sexoCliente;
        nuevoCliente.querySelector(".celdaEdad").textContent = edadCliente;
        nuevoCliente.querySelector(".celdaAltura").textContent = alturaCliente;
        nuevoCliente.querySelector(".celdaPeso").textContent = pesoCliente;
        nuevoCliente.querySelector(".spanActividad").textContent = actividadCliente;

        // Se crea una funcion para calcular el metabolismo GER
        const metabolismoGER = function (peso, altura, edad, sexo) {
          if (sexo === 'hombre') {
            return Math.floor(66.473 + (13.751 * peso) + (5.0033 * altura) - (6.755 * edad));
          } else if (sexo === 'mujer') {
            return Math.floor(655.0955 + (9.463 * peso) + (1.8496 * altura) - (4.6756 * edad));
          } else {
            return "Error en el cálculo";
          }
        };

        // Se crea una funcion para calcular el metabolismo GET
        const metabolismoGET = function (nivelActividad, metabolismoGER, sexo) {
          if (nivelActividad === "sedentaria" && sexo === 'hombre') {
            return Math.floor(metabolismoGER * 1.3);
          } else if (nivelActividad === "ligera" && sexo === 'hombre') {
            return Math.floor(metabolismoGER * 1.6);
          } else if (nivelActividad === "moderada" && sexo === 'hombre') {
            return Math.floor(metabolismoGER * 1.7);
          } else if (nivelActividad === "intensa" && sexo === 'hombre') {
            return Math.floor(metabolismoGER * 2.1);
          } else if (nivelActividad === "sedentaria" && sexo === 'mujer') {
            return Math.floor(metabolismoGER * 1.3);
          } else if (nivelActividad === "ligera" && sexo === 'mujer') {
            return Math.floor(metabolismoGER * 1.5);
          } else if (nivelActividad === "moderada" && sexo === 'mujer') {
            return Math.floor(metabolismoGER * 1.6);
          } else if (nivelActividad === "intensa" && sexo === 'mujer') {
            return Math.floor(metabolismoGER * 1.9);
          } else {
            return "Error en el cálculo";
          }
        };
        
        const calculoGER = metabolismoGER(pesoCliente, alturaCliente, edadCliente, sexoCliente);
        nuevoCliente.querySelector(".celdaGER").textContent = calculoGER;
        nuevoCliente.querySelector(".celdaGET").textContent = metabolismoGET(actividadCliente, calculoGER, sexoCliente);

        wrap.appendChild(nuevoCliente);       
        contenedor.appendChild(wrap);

        // Limpiar el formulario y cerrar el modal
        document.getElementById("formulario").reset();
        let modal = bootstrap.Modal.getInstance(
          document.getElementById("staticBackdrop")
        );
        modal.hide();
      }

      form.classList.add('was-validated')
    }, false);
  });

});