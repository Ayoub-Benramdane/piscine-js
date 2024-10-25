const multiply = (a, b) => {
    let bol = false
    if (a > 0 && b < 0) b = -b, bol = true
    if (a < 0 && b > 0) a = -a, bol = true
    if (a < 0 && b < 0) a = -a, b = -b
    let res = 0
    while (b > 0) {
        b--
        res += a
    }
    return bol ? -res : res
}

const divide = (a, b) => {
    let bol = false
    if (a > 0 && b < 0) b = -b, bol = true
    if (a < 0 && b > 0) a = -a, bol = true
    if (a < 0 && b < 0) a = -a, b = -b
    let res = 0
    while (b <= a) {
        a -= b
        res++
    }
    return bol ? -res : res
}

const modulo = (a, b) => {
    let bol = false
    if (a > 0 && b < 0) b = -b, bol = true
    if (a < 0 && b > 0) a = -a, bol = true
    if (a < 0 && b < 0) a = -a, b = -b
    while (b <= a) {
        a -= b
    }
    return bol ? -a : a
}

const round = (nb) => {
    if (modulo(nb, 1) >= 0.5) return divide(nb, 1) + 1
    if (modulo(nb, 1) <= -0.5) return divide(nb, 1) - 1
    return divide(nb, 1)
}

const ceil = (nb) => {
    if (modulo(nb, 1) != 0 && nb > 0) return divide(nb, 1) + 1
    if (modulo(nb, 1) != 0) return divide(nb, 1)
    return nb
}

const floor = (nb) => {
    if (modulo(nb, 1) != 0 && nb > 0) return divide(nb, 1)
    if (modulo(nb, 1) != 0) return divide(nb, 1) - 1
    return nb
}

const trunc = (nbr) => {
    let sing = false
    let c = 0
    if (nbr == 0) return nbr
    if (nbr > 68719476735) nbr -= 68719476735, c += 68719476735
    if (nbr < 0) nbr = -nbr, sing = true
    while (nbr > 1) {
        nbr--
        c++
    }
    return sing ? -c : c
}