let tablaMascotas = document.getElementById("tabla-mascotas")
let cuerpoTabla = tablaMascotas.querySelector("tbody");

//Clases
class Mascota {
    constructor(nombreMascota,nombreDueño,cedulaDueño,edadMascota,telefonoDueño,especialidad,medico){
        this.nombreMascota = nombreMascota;
        this.nombreDueño = nombreDueño;
        this.cedulaDueño = cedulaDueño;
        this.edadMascota = edadMascota;
        this.telefonoDueño = telefonoDueño;
        this. especialidad = especialidad;
        this.medico = medico
    }
}

//Objetos
let mascota1 = new Mascota("Luna", "Ana", "1234567", "5 Años", "3208333297", "Veterinaria Conductual", "Jorge")
let mascota2 = new Mascota("Orion", "Ana", "1234567", "5 Años", "3208333297", "Veterinaria Conductual", "Jorge")
let mascota3 = new Mascota("Mailo", "Ana", "1234567", "5 Años", "3208333297", "Veterinaria Conductual", "Jorge")
let mascota4 = new Mascota("Luna", "Ana", "1234567", "5 Años", "3208333297", "Veterinaria Conductual", "Jorge")

agregarFila(mascota1)
agregarFila(mascota2)
agregarFila(mascota3)
agregarFila(mascota4)
//Objetos - Metodo largo con mas codigo para agregar celdas y datos
// let mascotas = [
//     {
//         nombreMascota: "Luna",
//         nombreDueño: "Ana",
//         cedulaDueño: "1234567",
//         edadMascota: "5 Años",
//         telefonoDueño: "3208333297",
//         especialidad: "Veterinaria Conductual",
//         medico: "Jorge"
//     },
//     {
//         nombreMascota: "Orion",
//         nombreDueño: "Jorge",
//         cedulaDueño: "7654321",
//         edadMascota: "2 Años",
//         telefonoDueño: "3208993345",
//         especialidad: "Medicina Interna",
//         medico: "Daniela"
//     },
//     {
//         nombreMascota: "Mailo",
//         nombreDueño: "Kevin",
//         cedulaDueño: "45678921",
//         edadMascota: "2 Meses",
//         telefonoDueño: "3207893562",
//         especialidad: "Patologia",
//         medico: "Andres"
//     },
//     {
//         nombreMascota: "Luna",
//         nombreDueño: "Jesus",
//         cedulaDueño: "3448520",
//         edadMascota: "4 Años",
//         telefonoDueño: "3204983645",
//         especialidad: "Farmatologia",
//         medico: "Jeison"
//     }
// ]

//Arreglo
// let mascotas = [mascota1,mascota2,mascota3,mascota4]

//Si no queremos utilizar arreglos utilizamos una funcion
function agregarFila(mascota){
    let fila = cuerpoTabla.insertRow();
    let celdaNombreMascota = fila.insertCell();
    let celdaNombreDueño = fila.insertCell();
    let celdaCedulaDueño = fila.insertCell();
    let celdaEdadMascota = fila.insertCell();
    let celdaTelefonoDueño = fila.insertCell();
    let celdaEspecialidad = fila.insertCell();
    let celdaMedico = fila.insertCell();
    celdaNombreMascota.textContent = mascota.nombreMascota;
    celdaNombreDueño.textContent = mascota.nombreDueño
    celdaCedulaDueño.textContent = mascota.cedulaDueño;
    celdaEdadMascota.textContent = mascota.edadMascota;
    celdaTelefonoDueño.textContent = mascota.telefonoDueño;
    celdaEspecialidad.textContent = mascota.especialidad;
    celdaMedico.textContent = mascota.medico;
}

// for (let i = 0; i < mascotas.length; i++ ){
//     let mascota = mascotas[i]; 
//     let fila = cuerpoTabla.insertRow();
//     let celdaNombreMascota = fila.insertCell();
//     let celdaNombreDueño = fila.insertCell();
//     let celdaCedulaDueño = fila.insertCell();
//     let celdaEdadMascota = fila.insertCell();
//     let celdaTelefonoDueño = fila.insertCell();
//     let celdaEspecialidad = fila.insertCell();
//     let celdaMedico = fila.insertCell();

//     celdaNombreMascota.textContent = mascota.nombreMascota;
//     celdaNombreDueño.textContent = mascota.nombreDueño
//     celdaCedulaDueño.textContent = mascota.cedulaDueño;
//     celdaEdadMascota.textContent = mascota.edadMascota;
//     celdaTelefonoDueño.textContent = mascota.telefonoDueño;
//     celdaEspecialidad.textContent = mascota.especialidad;
//     celdaMedico.textContent = mascota.medico;
// }

//EJEMPLO DE CLASES
// class Animal{
//     constructor(nombreAnimal,generoAnimal){
//         this.nombre = nombreAnimal
//         this.genero = generoAnimal
//     }
//     saludar(){
//         console.log(`Hola, mi nombre es ${this.nombre}`)
//     }
// }

// const gato = new Animal("SR Gato","Macho")

// console.log(typeof gato)
// console.log(gato)
// gato.saludar()

// const cocodrilo = new Animal("Lilo Cocodrilo","Macho")
// cocodrilo.saludar()
// console.log(cocodrilo.genero)

// class perro extends Animal{
//     constructor(nombre,genero,tamanio){
//         super(nombre,genero)
//         this.tamanio = tamanio
//     }
//     saludar(){
//         console.log(`Hola! soy un perro y mi nombre es ${this.nombre}`)
//     }
//     ladra(){
//         console.log("Guau Guau")
//     }
// }

// const scooby = new perro("scooby doo","Macho","Grande")

// console.log(scooby)
// scooby.saludar()
// scooby.ladra()