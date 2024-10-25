const get = (obj, path) => {
    let paths = path.split('.')
    return paths.reduce((currentObj, key) => {
        if (currentObj == null) return undefined
        return currentObj[key]
    }, obj)
}