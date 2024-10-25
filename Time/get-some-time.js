const weday = { 0: "Mon", 1: "Tue", 2: "Wed", 3: "Thu", 4: "Fri", 5: "Sat", 6: "Sun" }

function firstDayWeek(number, string) {
    // if (number === 1) return '01-01-' + string
    const date = new Date(string)
    if (parseInt(string) < 1914) {
        date.setDate(date.getDate() + 1)
    }
    console.log(date)
    let nDay = date.toString().slice(0, 3)
    console.log(nDay)
    let m = 0
    for (let i = 0; i < 7; i++) {
        if (weday[i] == nDay) break
        m++
    }
    date.setDate(number * (7 - m) - 5)
    console.log(number * (7 - m))
    let day = date.getDate()
    let month = (date.getMonth() + 1)
    let year = date.getFullYear()
    if (year < 1970) day += 1
    if (day < 10) day = "0" + day
    if (month < 10) month = "0" + month
    if (year < 10) year = "000" + year
    else if (year < 100) year = "00" + year
    else if (year < 1000) year = "0" + year
    return day + "-" + month + "-" + year
}

console.log(firstDayWeek(1, '1000'))