console.log('clase9')

/**
 * ej1
 */
// var x = 4, y = '4'
// x == y -> true
// x === y -> false << se recomienda para comparar >>

/**
 * ej2
 */
// var angel = {
//     nombre: 'angel'
// }

// var otraPersona = {
//     nombre: 'angel'
// }

//angel == otraPersona -> false
//angel === otroPersona -> false

/**
 *ej3
 */
// var angel = {
//     nombre: 'angel'
// }

// var otraPersona = angel

//angel == otraPersona -> true
//angel === otroPersona -> true

/**
 * ej4
 */
var angel = {
    nombre: 'angel'
}

var otraPersona = {
    ...angel
}
//angel == otraPersona -> false
//angel === otroPersona -> false