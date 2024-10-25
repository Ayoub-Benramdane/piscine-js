function isFriday(date){
    return date.toString().slice(0, 3) === "Fri"
}

function isWeekend(date){
    return date.toString().slice(0, 3) === "Sun" || date.toString().slice(0, 3) === "Sat"
}

function isLeapYear(date){
    return date.getFullYear() % 4 == 0
}


function isLastDayOfMonth(date){
    const mo = date.getMonth()
    date.setDate(date.getDate() + 1)
    return mo != date.getMonth()
}