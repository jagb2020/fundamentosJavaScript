/**
 * variables strings
 */
var nombre = 'Angel', apellido = 'Gonzañel'

var nombreEnMatusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

// var nombreCompleto = nombre + ' ' + apellido
var nombreCompleto = `${nombre} ${apellido}`

// var str = nombre.charAt(1) + nombre.charAt(2)
var str = nombre.substr(1,2)

var ultimaLetra = nombre.charAt(nombre.length - 1)