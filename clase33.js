console.log(`clase 33`)

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

function obternerPersonaje(id){
    return new Promise ((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(`:id`, id)}`
        $
            .get(url, opts, function (data) {
             resolve(data)   
            })
            .fail(() => reject(id))        
    })    
}

function onError(id) {
    console.log( `Sucedio un error al obtener el personaje ${id}`)
}

obternerPersonaje(1)
    .then(personaje1 => {
        console.log(`El personaje 1 es ${personaje1.name}`)
        return obternerPersonaje(2) 
})
    .then(personaje2 => {
        console.log(`El personaje 2 es ${personaje2.name}`)
        return obternerPersonaje(3) 
})
    .then(personaje3 => {
        console.log(`El personaje 3 es ${personaje3.name}`)
        return obternerPersonaje(4) 
})
    .then(personaje4 => {
        console.log(`El personaje 4 es ${personaje4.name}`)
        return obternerPersonaje(5)
})
    .then(personaje5 => {
        console.log(`El personaje 5 es ${personaje5.name}`)
        return obternerPersonaje(6)
})
    .then(personaje6 => {
        console.log(`El personaje 6 es ${personaje6.name}`)
        return obternerPersonaje(7)
})
    .then(personaje7 => {
        console.log(`El personaje 7 es ${personaje7.name}`)
        return obternerPersonaje(8)
})
    .then(personaje8 => {
        console.log(`El personaje 8 es ${personaje8.name}`)
})
// .catch(function (id) {
//     onError(id)
// })
.catch(onError) 