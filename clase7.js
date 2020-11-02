console.log('clase7')
/**
 * ej 1
 */
var angel = {
    //key: 'value'
    nombre: 'Angel',
    apellido: 'Gonzalez',
    edad: 28
}

var jose = {
    //key: 'value'
    nombre: 'jose',
    apellido: 'becerril',
    edad: 20
}

function imprimirNombreEnMayusculas(persona) {
    // var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(angel)
imprimirNombreEnMayusculas(jose)
// imprimirNombreEnMayusculas({nombre: 'Hector' })
// imprimirNombreEnMayusculas() //error undefined
// imprimirNombreEnMayusculas({}) //error undefined

/**
 * Reto
 */
function imprimirNombreyEdad(persona) {
    var { nombre, edad } = persona
    console.log('Hola, me llamo ' + nombre + ' y tengo '+ edad + ' años.')
}

imprimirNombreyEdad(angel)
imprimirNombreyEdad(jose)