'use strict'

  /* Importación de datos */
fetch("https://raw.githubusercontent.com/FRomero999/ExamenDIW2022/main/clientes.json")
  .then(response => response.json())
  .then(data => {

    data.forEach(function (el) {

      let tabla = document.getElementById("tabla");
      let tbody = tabla.getElementsByTagName("tbody")[0];

      let fila = document.createElement("tr");

      let celdaNombre = document.createElement("td");
      let celdaApellidos = document.createElement("td");
      let celdaSexo = document.createElement("td");
      let celdaEdad = document.createElement("td");
      let celdaPeso = document.createElement("td");
      let celdaAltura = document.createElement("td");
      let celdaActividad = document.createElement("td");
      let celdaGET = document.createElement("td");
      let celdaGER = document.createElement("td");

      let spanSexo = document.createElement("span");
      let spanActividad = document.createElement("span");

      const metabolismoGER = function (peso, altura, edad, sexo) {
        if (sexo === 'hombre') {
          return 66.473 + (13.751 * peso) + (5.0033 * altura) - (6.755 * edad);
        } else if (sexo === 'mujer') {
          return 655.0955 + (9.463 * peso) + (1.8496 * altura) - (4.6756 * edad);
        }
      };

      const metabolismoGET = function (nivelActividad, metabolismoGER, sexo) {
        if (nivelActividad === "sedentaria" && sexo === 'hombre') return metabolismoGER*1.3;
        if (nivelActividad === "ligera" && sexo === 'hombre') return metabolismoGER*1.6;
        if (nivelActividad === "moderada" && sexo === 'hombre') return metabolismoGER*1.7;
        if (nivelActividad === "intensa" && sexo === 'hombre') return metabolismoGER*2.1;
        if (nivelActividad === "sedentaria" && sexo === 'mujer') return metabolismoGER*1.3;
        if (nivelActividad === "ligera" && sexo === 'mujer') return metabolismoGER*1.5;
        if (nivelActividad === "moderada" && sexo === 'mujer') return metabolismoGER*1.6;
        if (nivelActividad === "intensa" && sexo === 'mujer') return metabolismoGER*1.9;
    }

      celdaNombre.textContent = el.nombre
      celdaApellidos.textContent = el.apellidos
      celdaEdad.textContent = el.edad
      celdaPeso.textContent = el.peso
      celdaAltura.textContent = el.altura

      spanSexo.textContent = el.sexo
      spanActividad.textContent = el.actividad
      const calculoGER = metabolismoGER(el.peso, el.altura, el.edad, el.sexo);
      celdaGER.textContent = calculoGER;
      celdaGET.textContent = metabolismoGET(el.actividad, calculoGER, el.sexo);

      spanSexo.classList.add("bg-primary", "rounded", "text-white", "px-2");
      celdaSexo.appendChild(spanSexo);

      spanActividad.classList.add("bg-secondary", "rounded", "text-white", "px-2");
      celdaActividad.appendChild(spanActividad);


      fila.appendChild(celdaNombre);
      fila.appendChild(celdaApellidos);
      fila.appendChild(celdaSexo);
      fila.appendChild(celdaEdad);
      fila.appendChild(celdaPeso);
      fila.appendChild(celdaAltura);
      fila.appendChild(celdaActividad);
      fila.appendChild(celdaGER);
      fila.appendChild(celdaGET);
      tbody.appendChild(fila);


    })

      .catch(err => {
        alert("Hubo error. Recargue la página.")
      });
  });

  /* Modal */
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
});