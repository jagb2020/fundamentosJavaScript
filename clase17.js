console.log('clase 17')

var jose = {
    nombre: 'Jose',
    apellido: 'Bonzalez',
    altura: 1.45
}

var angel = {
    nombre: 'Angel',
    apellido: 'Becerri',
    altura: 1.53
}

var hector = {
    nombre: 'Hector',
    apellido: 'Cenobio',
    altura: 1.60
}

var miguel = {
    nombre: 'Miguel',
    apellido: 'perez',
    altura: 1.57
}

var personas = [jose, angel, hector, miguel]

for (var i = 0; i < personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} metros`)
}