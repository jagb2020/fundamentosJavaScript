console.log(`clase 29`)

const API_URL = `https://swapi.dev/api/`
const PEOPLE_URL = `people/:id`

//$.get(parametro1, parametro2)
// $.get(`${API_URL}${PEOPLE_URL.replace(`:id`,1)}`,{ crossDomain: true})

// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(`:id`, 1)}`
const opts = { crossDomain: true}

const onPeopleResponse = function (persona){
    console.log(`Hola, yo soy ${persona.name}`)
}

// $.get(lukeUrl, opts, onPeopleResponse)

// $.get(lukeUrl, opts, function (luke){
//     console.log(`Hola yo soy, ${luke.name}`)
// })

function obternerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(`:id`, id)}`
    $.get(url, opts, onPeopleResponse)
}

// no podemos saber en que orden van a llegar las respuestas 
// esto se debe al asincronismo en JS
obternerPersonaje(1)
obternerPersonaje(2)
obternerPersonaje(3)