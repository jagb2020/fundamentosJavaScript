console.log('clase 20')

var jose = {
    nombre: 'Jose',
    apellido: 'Bonzalez',
    altura: 1.45,
    cantidadDeLibros:1
}

var angel = {
    nombre: 'Angel',
    apellido: 'Becerri',
    altura: 1.53,
    cantidadDeLibros:2
}

var hector = {
    nombre: 'Hector',
    apellido: 'Cenobio',
    altura: 1.81,
    cantidadDeLibros:3
}

var miguel = {
    nombre: 'Miguel',
    apellido: 'perez',
    altura: 1.87,
    cantidadDeLibros:4
}

var personas = [jose, angel, hector, miguel]

// var acum = 0

// for (var i = 0; i < personas.length; i++ ){
//     acum = acum + personas[i].cantidadDeLibros
// }
// console.log(`en total tiene ${acum} libros`)

// const reducer = (acum, persona) => {
//     return acum + persona.cantidadDeLibros
// }
// const reducer = (acum, persona) => acum + persona.cantidadDeLibros

const reducer = (acum, { cantidadDeLibros }) => 
    acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`en total tiene ${totalDeLibros} libros`)