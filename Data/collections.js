const arrToSet = (array) => {
    return new Set(array)
}

const arrToStr = (array) => {
    return array.join('')
}

const setToArr = (set) => {
    return Array.from(set)
}

const setToStr = (set) => {
    return Array.from(set).join('')
}

const strToArr = (str) => {
    return str.split("")
}

const strToSet = (str) => {
    return new Set(str.split(""))
}

const mapToObj = (map) => {
    return Object.fromEntries(map)
}

const objToArr = (obj) => {
    return Object.values(obj)
}

const objToMap = (obj) => {
    return new Map(Object.entries(obj))
}

const arrToObj = (arr) => {
    return Object.assign({}, arr)
}

const strToObj = (str) => {
    return Object.assign({}, Array.from(str))
}

const superTypeOf = (value) => {
    if (typeof value === "string") return 'String'
    if (typeof value === "number") return 'Number'
    if (typeof value === "function") return 'function'
    if (typeof value === 'object') return 'Object'
    if (value === null) return 'null'
    if (Array.isArray(value)) return 'Array'
    if (value instanceof Map) return 'Map'
    if (value instanceof Set) return 'Set'
    return 'undefined'
}