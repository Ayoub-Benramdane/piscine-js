const sign = (s) => {
    if (s > 0) {
        return 1
    } else if (s < 0) {
        return -1
    } else {
        return 0
    }
}

const sameSign = (s, t) => {
    return (sign(s) == sign(t))
}

const multiply = (a, b) => {
    let res=0
    for (let i=0; i<Math.abs(b);i++) {
            res += a
    }
    if (!sameSign(a,b)) {
        return -(Math.abs(res))
    } 
    return Math.abs(res)
} 

const divide = (a, b) => {
    if (Math.abs(a)<Math.abs(b)) {
        return 0
    }
    let res=0
    for (let i=1 ; multiply(i,Math.abs(b))<=Math.abs(a);i++ ) {
        res = i
    }
    if (!sameSign(a,b)) {
        return -res
    } 
    return res
} 

const modulo = (a, b) => {
    return (a-multiply(divide(a,b),b))
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

const trunc = (nb) => {
    return divide(nb)
}

console.log(round(3.4))
console.log(round(-3.3))
console.log(round(3.7))
console.log(round(-3.8))
console.log(round(0))
console.log(divide(0, 1))
console.log(ceil(-5.05))
console.log(floor(5.5))