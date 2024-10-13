const letterSpaceNumber = (str) => {
    let c = /([a-z] [0-9])(?!\w)/gi
    return str.match(c) || []
}