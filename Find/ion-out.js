const ionOut = (str) => {
    let c = /\w+tion(?!\w)/gi
    let c1 = /ion(?!\w)/gi
    return str == null || str.match(c) == null ? [] : str.match(c).map(x => x.replaceAll(c1, ''))
}