const isPositive = (nb) => {
    return nb >= 0
}

const abs = (nb) => {
    return isPositive(nb) ? nb : -nb
}