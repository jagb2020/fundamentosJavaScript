console.log(`clase 40`)

function crearSaludo (finalDeFrase) {
    return function (nombre) {
        console.log(`hola ${nombre} ${finalDeFrase}`)
    }
}

const saludoArgentino = crearSaludo(`che`)
const saludoMexicano = crearSaludo(`güey`)
const saludoColombiano = crearSaludo(`amigo`)

saludoArgentino (`Angel`)
saludoMexicano (`Angel`)
saludoColombiano (`Angel`)