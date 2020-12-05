console.log(`clase 26`)

class Persona{
    constructor (nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn){
        var {nombre, apellido} = this
        console.log (`Hola, me llamo ${nombre} ${apellido} `)
        if (fn){
           fn(nombre, apellido) 
        }
    }
    soyalto(){
        return this.altura > 1.8
    }
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
// var angel = new Persona('Angel', 'Gonzalez', 1.81)

// angel.saludar()

class Desarrollador extends Persona {
    constructor (nombre, apellido, altura){
        super(nombre, apellido, altura)
    }
    saludar(fn){
        var {nombre, apellido} = this
        // var nombre = this.nombre
        // var apellido = this.apellido
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/ra`)
        if (fn){
            fn(nombre, apellido, true) 
         }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if (esDev){
        console.log(`no sabia que eras desarrolladora`)
    }
}

var pepe = new Persona (`Jose`, `Becerril`, 1.70)
var erika = new Persona (`Erika`, `Luna`, 1.85)
var jessi = new Desarrollador (`Jessica`, `Gonzalez`, 1.75)

pepe.saludar()
erika.saludar(responderSaludo)
jessi.saludar(responderSaludo)

// var angel = new Desarrollador('Angel', 'Gonzalez', 1.81)
// var patricia = new Desarrollador('Patricia', 'Dorantes', 1.71)