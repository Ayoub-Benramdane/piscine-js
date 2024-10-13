const cutFirst = (word) => {
    return word.slice(2)
}

const cutLast = (word) => {
    return word.slice(0, word.length - 2)
}

const cutFirstLast = (word) => {
    return word.slice(2, word.length - 2)
}

const keepFirst = (word) => {
    return word.slice(0, 2)
}

const keepLast = (word) => {
    return word.slice(word.length - 2)
}

const keepFirstLast = (word) => {
    if (word.length > 4) {
        return word.slice(0, 2) + word.slice(word.length - 2)
    }
    return word
}