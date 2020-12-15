console.log(`clase 42`)

const angel = {
    nombre: `Angel`,
    apellido: `Gonzalez`,
    edad: 28
}

const jose = {
    nombre: `Jose`,
    apellido: `Becerril`,
    edad: 20
}

function saludar (saludo = `hola`) {
    console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

// const saludarAAngel = saludar.bind(angel)
// const saludarAJose = saludar.bind(jose)

//bind no ejecuta la funcion, si no simplemente nos retorna una nueva funcion con ese contesto modificado
// setTimeout (saludar.bind(angel), 1000)

// call la ejecuta en ese momento
// saludar.call(angel, `hola che`)

    //no se ejecuta
    // saludar.bind(angel)

//apply es muy similar a call 
// saludar.apply(quien es this, [`parametros de la funcion`])
saludar.apply(angel, [`hola che`])
