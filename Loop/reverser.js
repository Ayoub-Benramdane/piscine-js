const reverse = (sla) => {
    let str = "", arr = []
    for (let i = sla.length - 1; i >= 0; i--) {
        if (typeof sla === 'string') str += sla[i]
        else arr.push(sla[i])
    }
    return str == "" ? arr : str
}
