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
    return res - 1
}
const modulo = (a, b) => {
    return a - divide(multiply(a, b), b)
}

console.log(modulo(-10, 8))