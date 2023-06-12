const formularioMedicos = document.getElementById('registro-medicos-form')
formularioMedicos.addEventListener('submit', (event) =>{
    event.preventDefault();
    const datosMedico = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        cedula: document.getElementById('cedula').value,
        consultorio: document.getElementById('consultorio').value,
        telefono: document.getElementById('telefono').value,
        correo: document.getElementById('correo').value,
        especialidad: document.getElementById('especialidad').value
    }
    guardarCookies(datosMedico)


})

function guardarCookies(mascota) {
    //las cookies antiguas
    let datos = obtenerCookie("medicos");
    if (datos === "") {
        datos = "[]";
    }
    //objeto
    const mascotasObjetos = JSON.parse(datos);
    //añadir nuevas
    mascotasObjetos.push(mascota);
    const jsonDatos = JSON.stringify(mascotasObjetos)
    cambiarCookie("medicos", jsonDatos)

}

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

function cambiarCookie(nombre, valor) {
    document.cookie = `${nombre}=${encodeURIComponent(valor)}`;
}