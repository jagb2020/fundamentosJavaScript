console.log('clase10')
/**
 * ej1
 */
var angel = {
    nombre: 'angel',
    edad: 18,
    ingeniero: true,
    cocinero: false,
    ciclista: false
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)
    
    if (persona.ingeniero){
    // if (persona.ingeniero === true){
        console.log('ingeniero')
    }else {
        console.log('no es ingeniero')
    }

    if (persona.cocinero){
        // if (persona.cocinero === true){
            console.log('cocinero')
    }else {
        console.log('no es cocinero')
    }

     if (persona.ciclista){
    // if (persona.ciclista === true){
        console.log('ciclista')
    }else {
        console.log('no es ciclista')
    }
}

imprimirProfesiones(angel)

/**
 * reto
 */
function imprimirSiEsMayorDeEdad(persona){
    console.log(`${persona.nombre} tiene ${persona.edad} años`)

    if(persona.edad < 18){
        console.log ('es menor de edad')
    }else{
        console.log ('es mayor de edad')
    }
}

imprimirSiEsMayorDeEdad(angel)