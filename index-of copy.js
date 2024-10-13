const indexOf = (arr, value, op) => {
    let va = 0
    if (op != null) {
        va = op
    }
    for (let i = va; i < arr.length; i++) {
        if (arr[i] === value) {
            return i
        }
    }
    return - 1
}

function lastIndexOf(arr, value, index) {
    if (index == null) {
        index = arr.length-1;
    }
    for (let i=index; i>=0; i--) {
        if (arr[i] == value) {
            return i
        }
    }
    return -1;
}

function includes(arr, value) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i] == value) {
            return true
        }
    }
    return false;
}
