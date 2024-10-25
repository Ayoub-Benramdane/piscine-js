const RNA = (str) => {
    let str1 = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "G") str1 += "C"
        if (str[i] == "C") str1 += "G"
        if (str[i] == "T") str1 += "A"
        if (str[i] == "A") str1 += "U"
    }
    return str1
}

const DNA = (str) => {
    let str1 = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "C") str1 += "G"
        if (str[i] == "G") str1 += "C"
        if (str[i] == "A") str1 += "T"
        if (str[i] == "U") str1 += "A"
    }
    return str1
}