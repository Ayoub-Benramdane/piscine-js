const invert = (obj) => {
    const nObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            nObj[obj[key]] = key
        }
    }
    return nObj
}