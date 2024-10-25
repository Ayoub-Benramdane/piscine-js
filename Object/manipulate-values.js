function filterValues(obj, func) {
    let rtn = {}
    for (const key in obj) {
        if (func(obj[key])) rtn[key] = obj[key]
    }
    return rtn
}

function mapValues(obj, func) {
    let rtn = {}
    for (const key in obj) {
        rtn[key] = func(obj[key])
    }
    return rtn
}

function reduceValues(obj, func, init) {
    let rtn = (init != undefined) ? init : 0
    for (const key in obj) {
        rtn = func(rtn, obj[key])
    }
    return rtn
}