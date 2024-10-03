const chunk = (arr, nb) => {
    let res = []
    let resFinal = []
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        count++
        res.push(arr[i])
        if (count == nb || i == arr.length - 1) {
            resFinal.push(res)
            res = []
            count = 0
        }
    }
    return resFinal
}