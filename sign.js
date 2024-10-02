const sign = (nb) => {
    if (nb === 0) {
        return 0
    } else if (nb > 0) {
        return 1
    }
    return -1
}

const sameSign = (nb, nb1) => {
    return sign(nb) === sign(nb1)
}