console.log(`clase 32`)

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
    .then(function (personaje) {
        console.log(`El personaje 1 es ${personaje.name}`)
})
.catch(function (id) {
    onError(id)
})

// .catch(onError) 