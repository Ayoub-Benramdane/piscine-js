function dayOfTheYear(date){
    let year = date.getFullYear()
    if (year < 100) year = "00" + year
    else if (year < 1000) year = "0" + year
    let yearFinal = year + '-01-01'
    const firstDay = new Date(yearFinal)
    if (Math.floor((date - firstDay) / (1000 * 60 * 60 *24)) <= 0) return 1
    return Math.floor((date - firstDay) / (1000 * 60 * 60 *24)) + 1
}