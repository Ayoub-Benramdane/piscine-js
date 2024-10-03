const flat = (arr, arg) => {
    if (arg == null) {
        arg = 1
    }
    let table = []
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] != 'object') {
            table.push(arr[i])
        } else if (arg > 0) {
            
        }
    }
    return table
}

console.log(flat([0, 1, [2, [3, [4, 5]]]], 5))