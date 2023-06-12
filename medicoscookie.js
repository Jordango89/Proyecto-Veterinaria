let tablamedicos = document.getElementById("tablamedicos")
let cuerpoTabla = tablamedicos.querySelector("tbody");

const medicosCookie = JSON.parse(obtenerCookie("medicos"))

for(let i=0; i< medicosCookie.length; i++){
    let medico = medicosCookie[i]
    const fila = cuerpoTabla.insertRow();
    const nombre = fila.insertCell();
    const apellido = fila.insertCell();
    const cedula = fila.insertCell();
    const especialidad = fila.insertCell();
    const consultorio = fila.insertCell();
    const correo = fila.insertCell();
    const telefono = fila.insertCell();
    nombre.textContent = medico.nombre;
    apellido.textContent = medico.apellido;
    cedula.textContent = medico.cedula;
    especialidad.textContent = medico.especialidad;
    consultorio.textContent = medico.consultorio;
    correo.textContent = medico.correo;
    telefono.textContent = mascota.telefono;
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