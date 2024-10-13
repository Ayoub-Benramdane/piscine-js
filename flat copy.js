const flat = (arr, arg) => {
    if (arg == null) {
        arg = 1
    }
    let table = []
    for (let i = 0; i < arr.length; i++) {
        let val = false
        if (typeof arr[i] != 'object') {
            table.push(arr[i])
        } else {
            let nb = arg
            let obj = arr[i]
            while (nb > 0 && typeof obj == 'object') {
                nb--
                obj = flat2(obj, table)
                val = true
            }
            if (val && typeof obj == 'object') {
                table.push(obj)
                continue
            }
            if (arg == 0) {
                table.push(arr[i])
            }
        }
    }
    return table
}

const flat2 = (obj, table) => {
    for (let i = 0; i < obj.length; i++) {
        if (typeof obj[i] != 'object') {
            table.push(obj[i])
        } else {
            return obj[i]
        }
    }
}
