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
    if (Object.prototype.toString.call(value) === '[object Map]') {
        return 'Map'
    } else if (Object.prototype.toString.call(value) === '[object Set]') {
        return 'Set'
    } else if (typeof value === "number") {
        return 'Number'
    } else if (typeof value === "string") {
        return 'String'
    } else if (Array.isArray(value)) {
        return 'Array'
    } else if (typeof value === "function") {
        return 'Function'
    } else if (value === null) {
        return 'null'
    } else if (typeof value === "undefined") {
        return 'undefined'
    } else {
        return 'Object'
    }
}