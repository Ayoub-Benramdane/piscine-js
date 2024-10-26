function fusion(obj1, obj2) {
    const res = {}
    const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)])
    keys.forEach(key => {
        const val1 = obj1[key]
        const val2 = obj2[key]
        if (val2 === undefined) res[key] = val1
        else if (val1 === undefined) res[key] = val2
        else {
            if (Array.isArray(val1) && Array.isArray(val2)) res[key] = val1.concat(val2)
            else if (typeof val1 === 'string' && typeof val2 === 'string') res[key] = val1 + " " + val2
            else if (typeof val1 === 'number' && typeof val2 === 'number') res[key] = val1 + val2
            else if (typeof val1 === 'object' && typeof val2 === 'object') res[key] = fusion(val1, val2)
            else res[key] = val2
        }
    })
    return res
}