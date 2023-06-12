
const persona = {
    //definimos atributos
    nombre: "Jhon",
    apellido: "Castillo",
    genero: "m",
    edad: "39",
    casado: true,
    contacto:{
        email: "ejemplo@prueba.com",
        telefono: "3106537887"
    },
    ///Definimos los metodos
    saludar: function(){
        console.log("Hola")
    },
    llamar: function(){
        console.log(`Me puede llamar al ${this.contacto.telefono}`)
    }
}

console.log(`Hola, mi nombre es ${persona.nombre} y mi edad ${persona.edad}, mi correo electronico es ${persona.contacto.email}`)

persona.saludar()
persona.llamar()

const mariana = {
    nombre: "Mariana",
    apellido: "Mendez",
    edad: "45"
}

for(const llave in mariana) {
    console.log(`Llave: ${llave} y el valor: ${mariana[llave]}`)
}