const sameAmount = (str, rg1, rg2) => {
    const matches1 = str.match(new RegExp(rg1, "g"))
    const matches2 = str.match(new RegExp(rg2, "g"))
    return (matches1 ? matches1.length : 0) === (matches2 ? matches2.length : 0)
}