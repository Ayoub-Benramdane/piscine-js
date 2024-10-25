const indexOf = (arr, value, op) => {
    if (op === undefined) op = 0
    for (let i = op; i < arr.length; i++) {
        if (arr[i] === value) return i
    }
    return - 1
}

function lastIndexOf(arr, value, op) {
    if (op === undefined) op = arr.length - 1
    for (let i = op; i >= 0; i--) {
        if (arr[i] == value) return i
    }
    return -1
}

function includes(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) return true
    }
    return false
}