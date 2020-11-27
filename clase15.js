console.log(`clase 15`)

var contador = 0
const llueve = () => Math.random() < 0.25

do{
    contador++
}while(!llueve())

// var frecuencia = contador===1 ? "vez":"veces";
// console.log(`Fui a ver si llovía ${contador} ${frecuencia}`)

if (contador === 1) {
    console.log(`Fui a ver si llovia ${contador} vez.`)
  } else {
    console.log(`Fui a ver si llovia ${contador} veces.`)  
  }