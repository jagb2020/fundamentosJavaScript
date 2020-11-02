console.log('clase8')
/**
 * ej 1
 */
var angel = {
    //key: 'value'
    nombre: 'Angel',
    apellido: 'Gonzalez',
    edad: 28
}

var jose = {
    //key: 'value'
    nombre: 'jose',
    apellido: 'becerril',
    edad: 20
}

function cumpleanos(persona){
    /**
     * modifica el objeto
     */
    // persona.edad = persona.edad + 1
    // persona.edad += 1   

    /**
     * crea otro objeto modificado
     */
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

