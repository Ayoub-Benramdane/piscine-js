const longWords = (arr) => {
    return arr.every(element => element.length >= 5)
}

const oneLongWord = (arr) => {
    return arr.some(element => element.length >= 10)
}

const noLongWords = (arr) => {
    return arr.every(element => element.length < 7)
}