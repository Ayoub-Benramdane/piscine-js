const reverse = (sla) => {
    if (typeof sla === 'string') {
        let str = ""
        for (let i = sla.length-1; i >= 0; i--) {
            str += sla[i]
        }
        return str
    }
    let arr = []
    for (let i = sla.length-1; i >= 0; i--) {
        arr.push(sla[i])
    }
    return arr
}
