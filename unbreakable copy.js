const split = (sla, spl) => {
    let arr = []
    let str = ""
    if (spl == "") {
        for (let i = 0; i < sla.length; i++) {
            arr.push(sla[i])
        }
    } else {
        for (let i = 0; i < sla.length; i++) {
            if (sla.slice(i, i + spl.length) != spl) {
                str += sla[i]
            }
            if ((sla.slice(i, i + spl.length) == spl && i + spl.length == sla.length)) {
                arr.push(str)
                arr.push("")
                i += spl.length - 1
            } else if ((sla.slice(i, i + spl.length) == spl || i == sla.length - 1)) {
                arr.push(str)
                i += spl.length - 1
                str = ""
            }
        }
    }
    if (arr.length == 0) {
        arr.push(sla)
    }
    return arr
}

const join = (sla, spl) => {
    let str = ""
    for (let i = 0; i < sla.length; i++) {
        str += sla[i]
        if (i != sla.length - 1) {
            str += spl
        }
    }
    return str
}