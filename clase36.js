console.log(`clase 36`)

// se recomienda cambiar a let
var angel = {
    nombre: `Angel`,
    apellido: `Gonzalez`,
    edad: 18
}

function esMayorDeEdad(persona) {
    // if (persona.edad > 18) {
    //     var mensaje = `Es mayor de edad`
    // }else{
    //     var mensaje = `Es menor de edad`
    // }
    // console.log(mensaje)
    // var mensaje

    //let reduce el alcance de la variable y se puede re asignar
    let mensaje

    //const cuando no se tiene que re asignar
    const mayoriaDeEdad = 18
    if (persona.edad >= mayoriaDeEdad) {
        mensaje = `Es mayor de edad`
    }else{
        mensaje = `Es menor de edad`
    }
    console.log(mensaje)
}

esMayorDeEdad(angel)