console.log('clase13')

var hector = {
    nombre: 'hector',
    apellido: 'gonzalez',
    edad: 28,
    peso: 75
}

console.log(`Al inicio del año ${hector.nombre} pesa ${hector.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_AÑO = 365
// function aumentarDePeso (persona){
//     return persona.peso += 200
// }
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO

const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_AÑO; i++){
    
    var random = Math.random()
    
    if(random < 0.25){
        aumentarDePeso(hector)
    } else if (random < 0.5){
        adelgazar(hector)
    }
}

console.log(`Al final del años ${hector.nombre} pesa ${hector.peso.toFixed(1)}kg`)