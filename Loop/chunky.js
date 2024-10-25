const chunk = (arr, nb) => {
    let [res, resFinal] = [[], []]
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i])
        if ((i + 1) % nb == 0 || i == arr.length - 1) {
            resFinal.push(res)
            res = []
        }
    }
    return resFinal
}