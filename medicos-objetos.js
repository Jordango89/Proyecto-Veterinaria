let tablamedicos = document.getElementById("tablamedicos")
let cuerpoTabla = tablamedicos.querySelector("tbody");

// let medicos = [
//     {
//         nombre: "Angel",
//         apellido: "Luna",
//         cedula: "1234567",
//         especialidad: "Dermatologia Medica",
//         consultorio: "1A",
//         correo: "angelluna@hotmail.com",
//         pacientes: "Jorge"
//     },
//     {
//         nombre: "Marlon",
//         apellido: "Medina",
//         cedula: "7654321",
//         especialidad: "Cirugia Veterinaria",
//         consultorio: "1B",
//         correo: "marlonmedica@hotmail.com",
//         pacientes: "Daniela"
//     },
//     {
//         nombre: "Sandra",
//         apellido: "Gomez",
//         cedula: "45678921",
//         especialidad: "Farmacologia Veterinaria",
//         consultorio: "2A",
//         correo: "sandragomez@hotmail.com",
//         pacientes: "Andres"
//     },
//     {
//         nombre: "Angela",
//         apellido: "Huertas",
//         cedula: "3448520",
//         especialidad: "Veterinaria Conductual",
//         consultorio: "2B",
//         correo: "angelahuertas@hotmail.com",
//         pacientes: "Jeison"
//     }
// ]

// for (let i = 0; i < medicos.length; i++ ){
//     let medico = medicos[i];
//     let fila = cuerpoTabla.insertRow();
//     let celdanombre = fila.insertCell();
//     let celdaapellido = fila.insertCell();
//     let celdacedula = fila.insertCell();
//     let celdaespecialidad = fila.insertCell();
//     let celdaconsultorio = fila.insertCell();
//     let celdacorreo = fila.insertCell();
//     let celdapacientes = fila.insertCell();

//     celdanombre.textContent = medico.nombre;
//     celdaapellido.textContent = medico.apellido;
//     celdacedula.textContent = medico.cedula;
//     celdaespecialidad.textContent = medico.especialidad;
//     celdaconsultorio.textContent = medico.consultorio;
//     celdacorreo.textContent = medico.correo;
//     celdapacientes.textContent = medico.pacientes;
// }

class Medicos {
    constructor(nombre,apellido,cedula,especialidad,consultorio,correo,pacientes){
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this. especialidad = especialidad;
        this.consultorio = consultorio;
        this.correo = correo;
        this.pacientes = pacientes
    }
}

let medico1 = new Medicos("Angel","Luna","1234567","Dermatologia Medica","1A","angelluna@hotmail.com","Jorge")
let medico2 = new Medicos("Marlon","Medina","7654321","Cirugia Veterinaria","1B","marlonmedica@hotmail.com","Daniela")
let medico3 = new Medicos("Sandra","Gomez","45678921","Farmacologia Veterinaria","2A","sandragomez@hotmail.com","Andres")
let medico4 = new Medicos("Angela","Huertas","3448520","Veterinaria Conductual","2B","angelahuertas@hotmail.com","Jeison")

agregarFila(medico1)
agregarFila(medico2)
agregarFila(medico3)
agregarFila(medico4)

function agregarFila(medicos){
    let fila = cuerpoTabla.insertRow();
    let celdanombre = fila.insertCell();
    let celdaapellido = fila.insertCell();
    let celdacedula = fila.insertCell();
    let celdaespecialidad = fila.insertCell();
    let celdaconsultorio = fila.insertCell();
    let celdacorreo = fila.insertCell();
    let celdapacientes = fila.insertCell();
    celdanombre.textContent = medicos.nombre;
    celdaapellido.textContent = medicos.apellido;
    celdacedula.textContent = medicos.cedula;
    celdaespecialidad.textContent = medicos.especialidad;
    celdaconsultorio.textContent = medicos.consultorio;
    celdacorreo.textContent = medicos.correo;
    celdapacientes.textContent = medicos.pacientes;
}