const slice = (value, start, end) => {
    let sla = ""
    if (end == null && start >= 0) {
        for (let i = start; i < value.length; i++) {
            sla += value[i]
        }
    } else if (end == null) {
        for (let i = value.length + start; i < value.length; i++) {
            sla += value[i]
        }
    } else if (end > start) {
        if (sameSign(start, end)) {
            if (start < 0) {
                start = start + value.length
                end = end + value.length
            }
            if (end > value.length) {
                end = value.length
            }
            for (let i = start; i < end; i++) {
                sla += value[i]
            }
        } else if (!sameSign(start, end)) {
            if (end > value.length) {
                end = value.length
            }
            for (let i = 0; i < end; i++) {
                sla += value[i]
            }
        }
    } else if (!sameSign(start, end)) {
        end += value.length
        for (let i = 0; i < end; i++) {
            sla += value[i]
        }
    }
    if (typeof value === 'string') {
        return sla
    }
    let arr = []
    for (let i = 0; i < sla.length; i++) {
        arr.push(parseInt(sla[i]))
    }
    return arr
}

const sign = (nb) => {
    if (nb === 0) {
        return 0
    } else if (nb > 0) {
        return 1
    }
    return -1
}

const sameSign = (nb, nb1) => {
    return sign(nb) === sign(nb1)
}