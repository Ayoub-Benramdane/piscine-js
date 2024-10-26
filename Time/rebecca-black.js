function isFriday(date) {
    return date.getDay() === 5
}

function isWeekend(date) {
    return date.getDay() === 6 || date.getDay() === 0
}

function isLeapYear(date) {
    return date.getFullYear() % 4 == 0 && date.getFullYear() % 100 != 0 || date.getFullYear() % 100 == 0 && date.getFullYear() % 400 == 0
}

function isLastDayOfMonth(date) {
    return date.getMonth() != date.getMonth(date.setDate(date.getDate() + 1))
}
