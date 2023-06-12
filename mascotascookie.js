let tablaMascotas = document.getElementById("tabla-mascotas")
let cuerpoTabla = tablaMascotas.querySelector("tbody");

const mascotasCookie = JSON.parse(obtenerCookie("mascotas"))

for(let i=0; i< mascotasCookie.length; i++){
    let mascota = mascotasCookie[i]
    const fila = cuerpoTabla.insertRow();
    const nombreMascota = fila.insertCell();
    const nombreDueño = fila.insertCell();
    const cedulaDueño = fila.insertCell();
    const edadMascota = fila.insertCell();
    const telefonoDueño = fila.insertCell();
    const especialidad = fila.insertCell();
    // const medico = fila.insertCell();

    nombreMascota.textContent = mascota.nombreMascota;
    nombreDueño.textContent = mascota.nombreDueño;
    cedulaDueño.textContent = mascota.cedulaDueño;
    edadMascota.textContent = mascota.edadMascota;
    telefonoDueño.textContent = mascota.telefonoDueño;
    especialidad.textContent = mascota.especialidad;
    // medico.textContent = mascota.medico;
};

function obtenerCookie(nombre) {
    const cookies = document.cookie.split("; ")
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === nombre) {
            return decodeURIComponent(cookie[1]);
        }
    }
    return "";
}