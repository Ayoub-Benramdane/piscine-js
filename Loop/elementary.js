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