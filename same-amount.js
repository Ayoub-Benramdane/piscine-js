const sameAmount = (str, rg1, rg2) => {
    const reg1 = new RegExp(rg1, "g")
    const reg2 = new RegExp(rg2, "g")
    const matches1 = str.match(reg1)
    const matches2 = str.match(reg2)
    return (matches1 ? matches1.length : 0) === (matches2 ? matches2.length : 0)
}