console.log(`clase 31`)

const API_URL = `https://swapi.dev/api/`
const PEOPLE_URL = `people/:id`

//$.get(parametro1, parametro2)
// $.get(`${API_URL}${PEOPLE_URL.replace(`:id`,1)}`,{ crossDomain: true})

// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(`:id`, 1)}`
const opts = { crossDomain: true}

// $.get(lukeUrl, opts, onPeopleResponse)

// $.get(lukeUrl, opts, function (luke){
//     console.log(`Hola yo soy, ${luke.name}`)
// })

function obternerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(`:id`, id)}`
    
    // $.get(url, opts, callback).fail(function () {
    //     console.log(`error ${id}`)
    // })
    $
    .get(url, opts, callback)
    .fail(() => {
        console.log(`Sucedio un error. No se pudo obterner el personaje ${id}`)
    })        
}

// no podemos saber en que orden van a llegar las respuestas 
// esto se debe al asincronismo en JS
/**
 * los requests se estan piden en serie
 */
obternerPersonaje(1, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`)

    obternerPersonaje(2, function(personaje) {
        console.log(`Hola, yo soy ${personaje.name}`)

        obternerPersonaje(3, function (personaje) {
            console.log(`Hola, yo soy ${personaje.name}`)

            obternerPersonaje(4, function (personaje) {
                console.log(`Hola, yo soy ${personaje.name}`)

                obternerPersonaje(5, function (personaje) {
                    console.log(`Hola, yo soy ${personaje.name}`)

                    obternerPersonaje(6, function (personaje) {
                        console.log(`Hola, yo soy ${personaje.name}`)

                        obternerPersonaje(7, function (personaje) {
                            console.log(`Hola, yo soy ${personaje.name}`)

                            obternerPersonaje(8, function (personaje) {
                                console.log(`Hola, yo soy ${personaje.name}`)

                                obternerPersonaje(9, function (personaje) {
                                    console.log(`Hola, yo soy ${personaje.name}`)

                                    obternerPersonaje(10, function (personaje) {
                                        console.log(`Hola, yo soy ${personaje.name}`)
                                    })
                                })
                            })
                        })
                    })
                })
            }) 
        })
    })
})