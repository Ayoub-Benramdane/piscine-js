const letterSpaceNumber = (str) => {
    let c = /[a-z] \d\W/gi
    return str.match(c) || []
}