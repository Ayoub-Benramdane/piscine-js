const chunk = (arr, nb) => {
    let res = [], nb1 = 0
    for (let i = 0; i < arr.length; i++) {
        if ((i + 1) % nb == 0 || i == arr.length - 1) res.push(arr.slice(nb1, i + 1)), nb1 = i + 1
    }
    return res
}