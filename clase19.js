console.log('clase 19')

var jose = {
    nombre: 'Jose',
    apellido: 'Bonzalez',
    altura: 1.45
}

var angel = {
    nombre: 'Angel',
    apellido: 'Becerri',
    altura: 1.53
}

var hector = {
    nombre: 'Hector',
    apellido: 'Cenobio',
    altura: 1.81
}

var miguel = {
    nombre: 'Miguel',
    apellido: 'perez',
    altura: 1.87
}

// const esAlta = (persona) => {
//     return persona.altura > 1.80
// }
// const esAlta = persona => persona.altura > 1.80
const esAlta = ({altura}) => altura > 1.80
// const esBaja = ({altura}) => altura < 1.80 
const esBaja = ({altura}) => !esAlta({altura})

var personas = [jose, angel, hector, miguel]

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)
// var personasAltas = personas.filter(function (persona){
//     return persona.altura > 1.80
// })

/**
 * se modifica la altura del arry original
 * @param {*} persona 
 */
// const pasarAlturaCms = persona => {
//     // persona.altura = persona.altura * 100
//     persona.altura *= 100
//     return persona
// }

/**
 * no se modifica la altura del array original
 * @param {*} persona 
 */
// const pasarAlturaCms = persona => {
//     return {
//        ...persona,
//         altura: persona.altura * 100
//     }
// }

/**
 * es una funcion mas ordenada
 * @param {*} persona 
 */
const pasarAlturaCms = persona => ({
    ...persona,
    altura: persona.altura * 100
})

var personaCms = personas.map(pasarAlturaCms)

console.log(personaCms)
