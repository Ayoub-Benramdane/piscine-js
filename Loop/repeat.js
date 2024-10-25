const repeat = (word, n) => {
    let s = ""
    while (n > 0) {
        n--
        s += word
    }
    return s
}