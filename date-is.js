const isValid = (date) => {
    if (typeof date === 'string') {
        return false
    }
    return (new Date(date)) instanceof Date && !isNaN(new Date(date)) 
}

const isAfter = (date, date1) => {
    const dBefore = new Date(date)
    const dAfter = new Date(date1)
    return dBefore > dAfter
}

const isBefore = (date, date1) => {
    const dBefore = new Date(date1)
    const dAfter = new Date(date)
    return dBefore > dAfter
}

const isFuture = (date) => {
    const dFuture = new Date(date)
    return dFuture > new Date() && isValid(date)
}

const isPast = (date) => {
    const dPast = new Date(date)
    return dPast < new Date() && isValid(date)
}