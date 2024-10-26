function filterValues(obj, func) {
    let res = {}
    for (const key in obj) if (func(obj[key])) res[key] = obj[key]
    return res
}

function mapValues(obj, func) {
    let res = {}
    for (const key in obj) res[key] = func(obj[key])
    return res
}

function reduceValues(obj, func, init) {
    for (const key in obj) init = func((init != undefined) ? init : 0, obj[key])
    return init
}