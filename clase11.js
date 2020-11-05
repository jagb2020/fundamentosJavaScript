console.log('clase11')

var angel = {
    nombre: 'angel',
    edad: 28,
    ingeniero: true,
    cocinero: false,
    ciclista: false
}

var jose = {
    nombre: 'jose',
    edad: 13
}
/**
 * ej1
 */
// function imprimirSiEsMayorDeEdad(persona){
//     if(persona.edad >= 18){
//         console.log(`${persona.nombre} es mayor de edad`)
//     }else{
//         console.log(`${persona.nombre} es menor de edad`)
//     }
// }
// imprimirSiEsMayorDeEdad(angel)
// imprimirSiEsMayorDeEdad(jose)


/**
 * ej2
 */
const MAYORIA_DE_EDAD = 18 
// var mayoriaEdad = 18

// function esMayorDeEdad(perosna){
//     // return perosna.edad >= 18
// }

function esMayorDeEdad(perosna){
    // return perosna.edad >= mayoriaEdad
    return perosna.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}
imprimirSiEsMayorDeEdad(angel)
imprimirSiEsMayorDeEdad(jose)