const pick = (obj, strs) => {
    const nObj = {}
    for (let key in obj) {
        if (typeof strs == "string") {
            if (key == strs) {
                nObj[key] = obj[key]
            }
        } else {
            for (let str of strs) {
                if (key == str) {
                    nObj[key] = obj[key]
                }
            }
        }
    }
    return nObj
}

const omit = (obj, strs) => {
    const nObj = {}
    for (let key in obj) {
        if (typeof strs == "string") {
            if (key != strs && obj.hasOwnProperty(key)) {
                nObj[key] = obj[key]
            }
        } else {
            let valid = false
            for (let str of strs) {
                if (key == str) {
                    valid = true
                }
            }
            if (!valid && obj.hasOwnProperty(key)) {
                nObj[key] = obj[key]
            }
        }
    }
    return nObj
}
