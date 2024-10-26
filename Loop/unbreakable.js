const split = (sla, spl) => {
    if (sla == '') return ['']
    let arr = [], nb = 0
    for (let i = 0; i < sla.length; i++) {
        if (spl == '') arr.push(sla[i])
        else if ((sla.slice(i, i + spl.length) == spl && i + spl.length == sla.length)) {
            arr.push(sla.slice(nb, i))
            arr.push('')
            i += spl.length - 1
        } else if ((sla.slice(i, i + spl.length) == spl || i == sla.length - 1)) {
            if (i == sla.length - 1) arr.push(sla.slice(nb))
            else {
                arr.push(sla.slice(nb, i))
                i += spl.length - 1
                nb = i + 1
            }
        }
    }
    return arr
}