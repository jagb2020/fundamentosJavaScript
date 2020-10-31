/**
 * ej 1
 */
// var nombreJose = 'Jose'
// var nombreAngel = 'Angel'

// function imprimirNombreEnMayusculas(nombre) {
//     nombre = nombre.toUpperCase()
//     console.log(nombre)
// }
        
// imprimirNombreEnMayusculas(nombreJose)
// imprimirNombreEnMayusculas(nombreAngel)

/**
 * ej 2
 */
// var angel = {
//     //key: 'value'
//     nombre: 'Angel',
//     apellido: 'Gonzalez',
//     edad: 28
// }

// var jose = {
//     //key: 'value'
//     nombre: 'jose',
//     apellido: 'becerril',
//     edad: 20
// }

// function imprimirNombreEnMayusculas(nombre) {
//     nombre = nombre.toUpperCase()
//     console.log(nombre)
// }

// imprimirNombreEnMayusculas(angel.nombre)
// imprimirNombreEnMayusculas(jose.nombre)

/**
 * ej 3
 */
// var angel = {
//     //key: 'value'
//     nombre: 'Angel',
//     apellido: 'Gonzalez',
//     edad: 28
// }

// var jose = {
//     //key: 'value'
//     nombre: 'jose',
//     apellido: 'becerril',
//     edad: 20
// }

// function imprimirNombreEnMayusculas(persona) {
//     var nombre = persona.nombre.toUpperCase()
//     console.log(nombre)
// }

// imprimirNombreEnMayusculas(angel)
// imprimirNombreEnMayusculas(jose)

/**
 * ej 4
 */
// var angel = {
//     //key: 'value'
//     nombre: 'Angel',
//     apellido: 'Gonzalez',
//     edad: 28
// }

// var jose = {
//     //key: 'value'
//     nombre: 'jose',
//     apellido: 'becerril',
//     edad: 20
// }

// function imprimirNombreEnMayusculas(persona) {
//     console.log(persona.nombre.toUpperCase())
// }

// imprimirNombreEnMayusculas(angel)
// imprimirNombreEnMayusculas(jose)

/**
 * ej 5
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

function imprimirNombreEnMayusculas({nombre}) {
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(angel)
imprimirNombreEnMayusculas(jose)
imprimirNombreEnMayusculas({nombre: 'Hector' })
// imprimirNombreEnMayusculas() //error undefined
// imprimirNombreEnMayusculas({}) //error undefined