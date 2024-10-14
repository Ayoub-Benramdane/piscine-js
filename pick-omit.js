const pick = (obj, strs) => {
    const nObj = {}
    for (let key in obj) {
        for (let str of strs) {
            if (key == str) {
                nObj[key] = obj[key]
            }
        }
    }
    return nObj
}

const omit = (obj, strs) => {
    const nObj = {}
    for (let key in obj) {
        let valid = false
        for (let str of strs) {
            if (key == str) {
                valid = true
            }
        }
        if (!valid) {
            nObj[key] = obj[key]
        }
    }
    return nObj
}