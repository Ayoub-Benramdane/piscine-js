const isValid = (date) => {
    if (typeof date === 'string') return false
    return (new Date(date)) instanceof Date && !isNaN(new Date(date))
}

const isAfter = (date, date1) => {
    return new Date(date) > new Date(date1)
}

const isBefore = (date, date1) => {
    return new Date(date1) > new Date(date)
}

const isFuture = (date) => {
    return new Date(date) > new Date() && isValid(date)
}

const isPast = (date) => {
    return new Date(date) < new Date() && isValid(date)
}