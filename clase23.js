console.log(`clase 23`)

function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log (`Hola, me llamo ${this.nombre} ${this.apellido} `)
}
Persona.prototype.soyalto = function () {
    return this.altura > 1.8
}

/*** marca error cuando this hace referencia a una funcion ***/
// Persona.prototype.saludar = () => {
//     console.log (`Hola, me llamo ${this.nombre} ${this.apellido} `)
// }
// Persona.prototype.soyalto = () => {
//     // debugger
//     return this.altura > 1.8
// }

/**
 * crea un nuevo objeto con el prototipo de persona
 */
var angel = new Persona('Angel', 'Gonzalez', 1.81)

// angel.saludar()

var pepe = new Persona (`Jose`, `Becerril`, 1.70)
var erika = new Persona (`Erika`, `Luna`, 1.85)
var jessi = new Persona (`Jessica`, `Gonzalez`, 1.75)

pepe.soyalto()
erika.soyalto()
jessi.soyalto()