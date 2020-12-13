console.log(`clase 38`)

function divisicionEntera (dividendo, divisor) {
    if (dividendo < divisor) {
        return 0
    }

    return 1 + divisicionEntera (dividendo - divisor, divisor)
}