const filter = (arr, fnc) => {
    let resFinal = []
    for (let i = 0; i < arr.length; i++) {
        if (fnc(arr[i], i, arr)) resFinal.push(arr[i])
    }
    return resFinal
}

const reject = (arr, fnc) => {
    let resFinal = []
    for (let i = 0; i < arr.length; i++) {
        if (!fnc(arr[i], i, arr)) resFinal.push(arr[i])
    }
    return resFinal
}

const partition = (arr, fnc) => {
    return [filter(arr, fnc), reject(arr, fnc)]
}