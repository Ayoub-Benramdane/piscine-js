const weday = { 0: "Monday", 1: "Tuesday", 2: "Wednesday", 3: "Thursday", 4: "Friday", 5: "Saturday" }

function sunnySunday(date) {
    let year = '0001-01-01'
    const firstDay = new Date(year)
    const days = Math.floor((date - firstDay) / (1000 * 60 * 60 * 24))
    const da = days % 6
    return weday[da]
}