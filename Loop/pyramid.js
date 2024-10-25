const pyramid = (sign, nb) => {
    let str = ""
    let space = nb * sign.length - sign.length + 1
    for (let i = 1; i <= nb; i++) {
        for (let k = 1; k < space; k++) {
            str += ' '
        }
        space -= sign.length
        for (let j = 0; j < i * 2 - 1; j++) {
            str += sign
        }
        if (i < nb) str += "\n"
    }
    return str
}