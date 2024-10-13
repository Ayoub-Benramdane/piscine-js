const RNA = (str) => {
    let str1 = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "G") {
            str1 += "C"
        } else if (str[i] == "C") {
            str1 += "G"
        } else if (str[i] == "T") {
            str1 += "A"
        } else if (str[i] == "A") {
            str1 += "U"
        }
    }
    return str1
}

const DNA = (str) => {
    let str1 = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "C") {
            str1 += "G"
        } else if (str[i] == "G") {
            str1 += "C"
        } else if (str[i] == "A") {
            str1 += "T"
        } else if (str[i] == "U") {
            str1 += "A"
        }
    }
    return str1
}