const every = (arr, fnc) => {
    for (let i = 0; i < arr.length; i++) {
        if (!fnc(arr[i])) return false
    }
    return true
}

const some = (arr, fnc) => {
    for (let i = 0; i < arr.length; i++) {
        if (fnc(arr[i])) return true
    }
    return false
}

const none = (arr, fnc) => {
    for (let i = 0; i < arr.length; i++) {
        if (fnc(arr[i])) return false
    }
    return true
}