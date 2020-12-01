console.log(`clase 21`)

function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function (){
    this.altura >= 1.8 ?
    console.log (`Hola, me llamo ${this.nombre} ${this.apellido} soy alto`):
    console.log (`Hola, me llamo ${this.nombre} ${this.apellido} soy bajo`)
}
/**
 * crea un nuevo objeto con el prototipo de persona
 */
var angel = new Persona('Angel', 'Gonzalez', 1.80)

// angel.saludar()

var pepe = new Persona (`Jose`, `Becerril`, 1.70)
var erika = new Persona (`Erika`, `Luna`, 1.85)
var jessi = new Persona (`Jessica`, `Gonzalez`, 1.75)