let tablaMascotas = document.getElementById("tabla-mascotas")
let cuerpoTabla = tablaMascotas.querySelector("tbody");

//Con fetch hacemos solicitud al servidor (al json) con comillas ' al inicio y fin
fetch('datos-mascotas.json')
    .then(Response => Response.json()) //Respuesta de la solicitud, que pasamos a objeto
    .then(mascotas => { // Objeto que se convirtio
        for (let i = 0; i < mascotas.length; i++ ) {
            let mascota = mascotas[i];
            let fila = cuerpoTabla.insertRow();
            let celdaNombreMascota = fila.insertCell();
            let celdaNombreDueño = fila.insertCell();
            let celdaCedulaDueño = fila.insertCell();
            let celdaEdadMascota = fila.insertCell();
            let celdaTelefonoDueño = fila.insertCell();
            let celdaEspecialidad = fila.insertCell();
            let celdaMedico = fila.insertCell();
        
            celdaNombreMascota.textContent = mascota.NombreMascota;
            celdaNombreDueño.textContent = mascota.NombreDueño;
            celdaCedulaDueño.textContent = mascota.CedulaDueño;
            celdaEdadMascota.textContent = mascota.EdadMascota;
            celdaTelefonoDueño.textContent = mascota.TelefonoDueño;
            celdaEspecialidad.textContent = mascota.Especialidad;
            celdaMedico.textContent = mascota.Medico;
        }
    })

//Control de errores
.catch(error => console.log("No encontro el Documento"));


//Arreglos
// let nombreMascotas = ["Luna", "Orion", "Mailo", "Luna"]
// let nombreDueño = ["Ana", "Jorge", "Kevin", "Jesus"]
// let cedulaDueño = ["1234567", "7654321", "45678921", "3448520"]
// let edadMascota =["5 Años", "2 Años", "2 Meses", "4 Años"]
// let telefonoDueño = ["3208333297", "3208993345", "3207893562", "3204983645"]
// let especialidad = ["Veterinaria Conductual", "Medicina Interna", "Patologia", "Farmatologia"]
// let medico = ["Jorge", "Daniela", "Andres", "Jeison"]

// for (let i = 0; i < nombreMascotas.length; i++ ){
//     let fila = cuerpoTabla.insertRow();
//     let celdaNombreMascota = fila.insertCell();
//     let celdaNombreDueño = fila.insertCell();
//     let celdaCedulaDueño = fila.insertCell();
//     let celdaEdadMascota = fila.insertCell();
//     let celdaTelefonoDueño = fila.insertCell();
//     let celdaEspecialidad = fila.insertCell();
//     let celdaMedico = fila.insertCell();

//     celdaNombreMascota.textContent = nombreMascotas[i];
//     celdaNombreDueño.textContent = nombreDueño[i];
//     celdaCedulaDueño.textContent = cedulaDueño[i];
//     celdaEdadMascota.textContent = edadMascota[i];
//     celdaTelefonoDueño.textContent = telefonoDueño[i];
//     celdaEspecialidad.textContent = especialidad[i];
//     celdaMedico.textContent = medico[i];
// }
