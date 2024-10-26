const multiply = (a, b) => {
    let isNegative = false, res = 0
    if (a > 0 && b < 0) b = -b, isNegative = true
    if (a < 0 && b > 0) a = -a, isNegative = true
    if (a < 0 && b < 0) a = -a, b = -b
    for (let i = b; i > 0; i--) {
        res += a
    }
    return isNegative ? -res : res
}

const divide = (a, b) => {
    if (b === 0) throw new Error("Division by zero is not allowed")
    let isNegative = false, res = 0
    if (a > 0 && b < 0) b = -b, isNegative = true
    if (a < 0 && b > 0) a = -a, isNegative = true
    if (a < 0 && b < 0) a = -a, b = -b
    for (; a >= b; a -= b) {
        res++
    }
    return isNegative ? -res : res
}

const modulo = (a, b) => {
    if (b === 0) throw new Error("Modulo by zero is not allowed")
    let isNegative = false
    if (a > 0 && b < 0) b = -b, isNegative = true
    if (a < 0 && b > 0) a = -a, isNegative = true
    if (a < 0 && b < 0) a = -a, b = -b
    for (; a >= b; a -= b) { }
    return isNegative ? -a : a
}