// let tablamedicos = document.getElementById("tablamedicos")
// let cuerpoTabla = tablamedicos.querySelector("tbody");

// //Arreglos
// let nombre = ["Angel", "Marlon", "Sandra", "Angela"]
// let apellido = ["Luna", "Medina", "Gomez", "Huertas"]
// let cedula = ["1234567", "7654321", "45678921", "3448520"]
// let especialidad =["Dermatologia Medica", "Cirugia Veterinaria", "Farmacologia Veterinaria", "Veterinaria Conductual"]
// let consultorio = ["1A", "1B", "2A", "2B"]
// let correo = ["angelluna@hotmail.com", "marlonmedica@hotmail.com", "sandragomez@hotmail.com", "angelahuertas@hotmail.com"]
// let pacientes = ["Jorge", "Daniela", "Andres", "Jeison"]

// for (let i = 0; i < nombre.length; i++ ){
//     let fila = cuerpoTabla.insertRow();
//     let celdanombre = fila.insertCell();
//     let celdaapellido = fila.insertCell();
//     let celdacedula = fila.insertCell();
//     let celdaespecialidad = fila.insertCell();
//     let celdaconsultorio = fila.insertCell();
//     let celdacorreo = fila.insertCell();
//     let celdapacientes = fila.insertCell();

//     celdanombre.textContent = nombre[i];
//     celdaapellido.textContent = apellido[i];
//     celdacedula.textContent = cedula[i];
//     celdaespecialidad.textContent = especialidad[i];
//     celdaconsultorio.textContent = consultorio[i];
//     celdacorreo.textContent = correo[i];
//     celdapacientes.textContent = pacientes[i];
// }

//Modo JSON
let tablamedicos = document.getElementById("tablamedicos")
let cuerpoTabla = tablamedicos.querySelector("tbody");

fetch('datos-medicos.json')
    .then(Response => Response.json()) //Respuesta de la solicitud, que pasamos a objeto
    .then(medicos => {
        for (let i = 0; i < medicos.length; i++ ){
            let medico = medicos[i];
            let fila = cuerpoTabla.insertRow();
            let celdanombre = fila.insertCell();
            let celdaapellido = fila.insertCell();
            let celdacedula = fila.insertCell();
            let celdaespecialidad = fila.insertCell();
            let celdaconsultorio = fila.insertCell();
            let celdacorreo = fila.insertCell();
            let celdapacientes = fila.insertCell();
        
            celdanombre.textContent = medico.nombre;
            celdaapellido.textContent = medico.apellido;
            celdacedula.textContent = medico.cedula;
            celdaespecialidad.textContent = medico.especialidad;
            celdaconsultorio.textContent = medico.consultorio;
            celdacorreo.textContent = medico.correo;
            celdapacientes.textContent = medico.pacientes;
        }
    })

.catch(error => console.log("No encontro el Documento"));