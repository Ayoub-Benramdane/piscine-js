const adder = (arr, d = 0) => {
    return arr.reduce((p, c) => { p + c }, d)
}

const sumOrMul = (arr, d = 0) => {
    return arr.reduce((p, c) => { (c % 2 == 0) ?  p * c : p + c }, d)
}


const funcExec = (arr, d = 0) => {
    return arr.reduce((p, c) => { c(p) }, d)
}