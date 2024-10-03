const nasa = (nb) => {
    let str = ""
    for (let i = 1; i <= nb; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            str +=  "NASA"
        } else if (i % 3 == 0) {
            str += "NA"
        } else if (i % 5 == 0) {
            str += "SA"
        } else {
            str += i.toString()
        }
        if (i < nb) {
            str += " "
        }
    }
    return str
}