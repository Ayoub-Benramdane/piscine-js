function findExpression(number) {
    const add4 = " +4"
    const mul2 = " *2"
    const expression = [{ nb: 1, expr: '1' }]
    while (expression.length > 0) {
        const { nb, expr } = expression.shift()
        if (nb === number) return expr
        const nextAdd = nb + 4
        const nextMul = nb * 2
        if (nextAdd <= number) expression.push({ nb: nextAdd, expr: expr + add4 })
        if (nextMul <= number) expression.push({ nb: nextMul, expr: expr + mul2 })
    }
    return undefined
}
