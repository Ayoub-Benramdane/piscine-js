function fold(arr, fnc, init) {
    let result = init
    for (let i = 0; i < arr.length; i++) {
        result = fnc(result, arr[i]);
    }
    return result
}

function foldRight(arr, fnc, init) {
    let result = init
    for (let i = arr.length - 1; i >= 0; i--) {
        result = fnc(result, arr[i]);
    }
    return result
}

function reduce(arr, fnc) {
    if (arr.length < 1) return
    let result = arr[0]
    for (let i = 1; i < arr.length; i++) {
        result = fnc(result, arr[i]);
    }
    return result
}

function reduceRight(arr, fnc) {
    if (arr.length < 1) return
    let result = arr[arr.length - 1]
    for (let i = arr.length - 2; i >= 0; i--) {
        result = fnc(result, arr[i]);
    }
    return result
}