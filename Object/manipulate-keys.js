function filterKeys(obj,func){
    let rtn = {}
    for (const key in obj){
        if (func(key)) rtn[key] = obj[key]
    }
    return rtn
}

function mapKeys(obj,func){
    let rtn = {}
    for (let key in obj){
        const k = func(key)
        rtn[k] = obj[key]
    }
    return rtn
}


function reduceKeys(obj, func, ini) {
    const keys = Object.keys(obj)
    let acc = ini
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        if (acc === undefined) {
            acc = key
        } else {
            acc = func(acc, key)
        }
    }
    return acc
}