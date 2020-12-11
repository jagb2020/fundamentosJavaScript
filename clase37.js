console.log(`clase 37`)

function diasEntreFechas(fecha1, fecha2) {
    const unDia = 1000 * 60 * 60 * 24
    // math.abs convierte un numero negativo a positivo
    // si el numero es positivo no hace ningun cambio
    const diferencia = Math.abs(fecha1 - fecha2)

    //math. floor redondea 22.3 22 
    return Math.floor(diferencia / unDia)
}

const hoy = new Date()
const nacimiento = new Date(1992, 12, 14)