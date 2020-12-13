console.log(`clase 41`)

const angel = {
    nombre: `Angel`,
    apellido: `Gonzalez`,
    edad: 28
}

// const cumpleanos = persona => persona.edad++

const cumpleanosInmutable = persona => ({
    ...persona,//desglosar a persona
    edad: persona.edad + 1
})

// const angel29 = cumpleanosInmutable(angel)

