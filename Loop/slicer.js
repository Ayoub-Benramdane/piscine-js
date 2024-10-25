const slice = (value, start, end) => {
    let str = '', tbl = []
    if (start < 0) start += value.length
    if (end == undefined) end = value.length
    if (end != undefined && end < 0) end += value.length
    for (let i = start; i < end; i++) {
        if (typeof value == 'string') str += value[i]
        else tbl.push(value[i])
    }
    return str == '' ? tbl : str
}