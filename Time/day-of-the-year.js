function dayOfTheYear(date) {
    let year = date.getFullYear()
    if (year < 1) year = 1
    if (year < 10) year = "000" + year
    else if (year < 100) year = "00" + year
    else if (year < 1000) year = "0" + year
    return Math.floor((date - new Date(year + '-01-01')) / (1000 * 60 * 60 * 24)) + 1
}