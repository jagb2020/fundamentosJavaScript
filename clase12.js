console.log('clase12')

var hector = {
    nombre: 'hector',
    edad: 28,
    ingeniero: true,
    cocinero: false,
    ciclista: false
}

var daniel = {
    nombre: 'daniel',
    edad: 13
}

const MAYOR_DE_EDAD = 18 
const MENOR_DE_EDAD = 17

/**
 * se destructura el objeto
 * @param {*} perosna 
 */
var esMayorDeEdad = ({edad}) => edad >= MAYOR_DE_EDAD
var esMenorDeEdad = ({edad}) => edad <= MENOR_DE_EDAD

/**
 * se elimina ( ) y { } return
 * @param {*} perosna 
 */
// var esMayorDeEdad = perosna => perosna.edad >= MAYORIA_DE_EDAD2

/**
 * => 
 * @param {*} perosna 
 */
// const esMayorDeEdad =  (perosna) => {
//     return perosna.edad >= MAYORIA_DE_EDAD2
// }

/**
 * se le asigna una variable a una funcion
 * @param {*} perosna 
 */
// var esMayorDeEdad = function (perosna){
//     return perosna.edad >= MAYORIA_DE_EDAD2
// }

/**
 * falso verdadero mayor
 * @param {*} perosna 
 */
function esMayorDeEdad(perosna){
    return perosna.edad >= MAYOR_DE_EDAD
}

/**
 * falso verdadero menor
 * @param {*} perosna 
 */
function esMenorDeEdad(perosna){
    return perosna.edad <= MAYOR_DE_EDAD
}
/**
 * mayor de edad
 * @param {*} persona 
 */
function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

imprimirSiEsMayorDeEdad(hector)
imprimirSiEsMayorDeEdad(daniel)

/**
 * menor de edad
 * @param {*} persona 
 */
function imprimirSiEsMenorDeEdad(persona){
    if(esMenorDeEdad(persona)){
        console.log(`${persona.nombre} es menor de edad`)
    }else{
        console.log(`${persona.nombre} es mayor de edad`)
    }
}

imprimirSiEsMenorDeEdad(hector)
imprimirSiEsMenorDeEdad(daniel)

/**
 * acceso
 * @param {*} persona 
 */
function permitirAcceso(persona){
    if(!esMayorDeEdad(persona)){
        console.log(`${persona.nombre} acceso denegado`)
    }else{
        console.log(`${persona.nombre} bienvenido`)
    }
}

permitirAcceso(hector)
permitirAcceso(daniel)