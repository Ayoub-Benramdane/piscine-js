const flat = (arr, arg) => {
    if (arg == null) arg = 1
    let [table, table2] = [[], []]
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] != 'object') table.push(arr[i])
        else if (arg > 0) table2 = flat(arr[i], arg - 1)
        else table.push(arr[i])
        for (let i = 0; i < table2.length; i++) {
            table.push(table2[i])

        }
    }
    return table
}