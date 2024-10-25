const sign = (nb) => {
    return nb === 0 ? 0 : nb > 0 ? 1 : -1
}

const sameSign = (nb, nb1) => {
    return sign(nb) === sign(nb1)
}