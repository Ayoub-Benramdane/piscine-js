function filterKeys(obj, func) {
    let res = {}
    for (const key in obj) if (func(key)) res[key] = obj[key]
    return res
}

function mapKeys(obj, func) {
    let res = {}
    for (let key in obj) res[func(key)] = obj[key]
    return res
}

function reduceKeys(obj, func, init) {
    for (let key in obj) {
        if (init === undefined) init = key
        else init = func(init, key)
    }
    return init
}