is.num = (word) => {
    return typeof word === 'number' && word !=NaN
}

is.nan = (word) => {
    return Number.isNaN(word)
}

is.str = (word) => {
    return typeof word === 'string'
}

is.bool = (word) => {
    return typeof word === 'boolean'
}

is.undef = (word) => {
    return typeof word === 'undefined'
}

is.def = (word) => {
    return typeof word !== 'undefined'
}

is.arr = (word) => {
    return Array.isArray(word)
}

is.obj = (word) => {
    return typeof word === 'object' && word != null && !Array.isArray(word)
}

is.fun = (word) => {
    return typeof word === 'function'
}

is.truthy = (word) => {
    return Boolean(word)
}

is.falsy = (word) => {
    return !Boolean(word)
}