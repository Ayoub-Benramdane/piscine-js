function findExpression(target) {
    const add4 = 4
    const mul2 = 2
    const expression = [{ num: 1, expr: '1' }]
    while (expression.length > 0) {
        const { num, expr } = expression.shift();
        if (num === target) {
            return expr;
        }
        const nextAdd = num + add4;
        const nextMul = num * mul2;
        if (nextAdd <= target) {
            expression.push({ num: nextAdd, expr: expr + " +4" });
        }
        if (nextMul <= target) {
            expression.push({ num: nextMul, expr: expr + " *2" });
        }
    }
    return undefined
}