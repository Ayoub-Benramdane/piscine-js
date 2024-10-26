function countLeapYears(date) {
    let count = 0
    for (let i = 1; i < date.getFullYear(); i++) {
        if (i % 100 == 0 && i % 400 == 0 || i % 100 != 0 && i % 4 == 0) count++
    }
    return count
}
