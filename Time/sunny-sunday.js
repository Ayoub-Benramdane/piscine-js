const weday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function sunnySunday(date) {
    const days = Math.floor((date - new Date('0001-01-01')) / (1000 * 60 * 60 * 24))
    return weday[days % 6]
}