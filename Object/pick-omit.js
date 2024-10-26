const pick = (obj, strs) => {
    const nObj = {}
    for (let key in obj) {
        if (typeof strs == "string" && key == strs) nObj[key] = obj[key]
        else if (typeof strs != "string") for (let str of strs) if (key == str) nObj[key] = obj[key]
    }
    return nObj
}

const omit = (obj, strs) => {
    const nObj = {}
    for (let key in obj) {
        if (typeof strs == "string" && key != strs && obj.hasOwnProperty(key)) nObj[key] = obj[key]
        else if (typeof strs != "string") {
            let valid = true
            for (let str of strs) if (key == str) valid = false
            if (valid && obj.hasOwnProperty(key)) nObj[key] = obj[key]
        }
    }
    return nObj
}