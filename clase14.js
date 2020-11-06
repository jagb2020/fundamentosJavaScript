console.log('clase14')

var hector = {
    nombre: 'hector',
    apellido: 'gonzalez',
    edad: 28,
    peso: 75
}

console.log(`Al inicio del año ${hector.nombre} pesa ${hector.peso}kg`)

const INCREMENTO_PESO2 = 0.3
const DIAS_DEL_AÑO2 = 365
// function aumentarDePeso (persona){
//     return persona.peso += 200
// }
const aumentarDePeso2 = persona => persona.peso += INCREMENTO_PESO2
const adelgazar2 = persona => persona.peso -= INCREMENTO_PESO2
const comeMucho2 = () => Math.random() < 0.3
const realizaDeporte2 = () => Math.random() < 0.4

const META = hector.peso -3

var dias = 0

while (hector.peso > META){
    
    if(comeMucho2()){
        //aumenta de peso
        aumentarDePeso2(hector)
    }
    if(realizaDeporte2()){
        //adelgazar
        adelgazar2(hector)
    }
    dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${hector.nombre} adelgazo 3kg`)