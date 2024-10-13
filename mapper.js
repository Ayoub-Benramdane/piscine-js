const map = (arr, fnc) => {
    let resFinal = []
    for (let i = 0; i < arr.length; i++) {
        res.push(fnc(arr[i], i, arr))
    }
    return resFinal
}

const flatMap = (arr, fnc) => {
    return [].concat(...map(arr, fnc))
}