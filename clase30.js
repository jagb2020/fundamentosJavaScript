console.log(`clase 30`)

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
    
    $.get(url, opts, function (persona){
        console.log(`Hola, yo soy ${persona.name}`)

        if (callback) {
            callback()
        }
    })
}

// no podemos saber en que orden van a llegar las respuestas 
// esto se debe al asincronismo en JS
/**
 * los requests se estan piden en serie
 */
obternerPersonaje(1, function () {
    obternerPersonaje(2, function() {
        obternerPersonaje(3, function () {
            obternerPersonaje(4)
        })
    })
})