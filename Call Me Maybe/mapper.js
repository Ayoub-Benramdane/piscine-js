const map = (arr, fnc) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(fnc(arr[i], i, arr))
    }
    return res
}

const flatMap = (arr, fnc) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(...fnc(arr[i], i, arr))
    }
    return res
}