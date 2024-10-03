const triangle = (sign, nb) => {
    let str = ""
    for (let i = 1; i <= nb; i++) {
        for (let j = 0; j < i; j++) {
            str += sign
        }
        if (i < nb) {
            str += "\n"
        }
    }
    return str
}