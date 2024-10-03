const multiply = (a, b) => {
    let bol = false
    if (a > 0 && b < 0) {
        b = -b
        bol = true
    } else if (a < 0 && b > 0) {
        a = -a
        bol = true
    } else if (a < 0 && b < 0) {
        a = -a
        b = -b
    }
    let res = 0
    while (b > 0) {
        b--
        res += a
    }
    if (bol) {
        return -res
    }
    return res
}
const divide = (a, b) => {
    let bol = false
    if (a > 0 && b < 0) {
        b = -b
        bol = true
    } else if (a < 0 && b > 0) {
        a = -a
        bol = true
    } else if (a < 0 && b < 0) {
        a = -a
        b = -b
    }
    let res = 0
    while (multiply(res, b) < a) {
        res++
    }
    if (bol) {
        return -(res - 1)
    }
    if (res === 0) {
        return 0
    }
    return res - 1
}
const modulo = (a, b) => {
    return a - divide(multiply(a, b), b)
}

const round = (nb) => {
    if (modulo(nb, 1) >= 0.5) {
        return divide(nb, 1) + 1
    } else if (modulo(nb, 1) <= -0.5) {
        return divide(nb, 1) - 1
    }
    return divide(nb, 1)
}

const ceil = (nb) => {
    if (modulo(nb, 1) != 0 && nb > 0) {
        return divide(nb, 1) + 1
    } else if (modulo(nb, 1) != 0) {
        return divide(nb, 1)
    }
    return nb
}

const floor = (nb) => {
    if (modulo(nb, 1) != 0 && nb > 0) {
        return divide(nb, 1)
    } else if (modulo(nb, 1) != 0) {
        return divide(nb, 1) - 1
    }
    return nb
}

const trunc = (nbr) => {
    let sing = false;
    let c = 0;
    if (nbr > 68719476735) {
        nbr -= 68719476735;
        c += 68719476735;
    }
    if (nbr == 0) {
        return nbr;
    }
    if (nbr < 0) {
        nbr = -nbr;
        sing = true;
    }
    while (nbr > 1) {
        nbr -= 1;
        c++;
    }
    if (sing) {
        return -c;
    }
    return c;
}