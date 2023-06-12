//Objeto. Ejemplo
const objetoUsuario ={
    nombre: "Mariana",
    edad:36
}

//json. Ejemplo
const jsonUsuario =`{
    "nombre": "Mariana",
    "edad": 16
}`

//el comando parse es para pasar de JSON a objetos
const usuario = JSON.parse(jsonUsuario)

console.log(`Hola soy ${jsonUsuario.nombre} y tengo ${usuario.edad}`)

//pasar de objeto a JSON
const usuario2 = JSON.stringify(objetoUsuario)

console.log(typeof usuario2) 

console.log(objetoUsuario)
console.log(usuario2)