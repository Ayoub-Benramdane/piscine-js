function countLeapYears(date){
    let tot =0
    for (let i = 1; i <date.getFullYear(); i++) {
        if (i%100 == 0) {
            if (i%400 == 0) {
                tot++
            }
        } else if (i%4 == 0) {
            tot++
        }
    }
    return tot
}