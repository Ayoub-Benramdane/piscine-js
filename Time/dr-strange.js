const days = {
    0: "Monday",
    1: "Tuesday",
    2: "Wednesday",
    3: "Thursday",
    4: "Friday",
    5: "Saturday",
    6: "Sunday",
    7: "secondMonday",
    8: "secondTuesday",
    9: "secondWednesday",
    10: "secondThursday",
    11: "secondFriday",
    12: "secondSaturday",
    13: "secondSunday"
}

const addWeek = (date) => {
    const realtime = new Date(date) - new Date('0001-01-01')
    const milSec = Math.floor(realtime / (1000 * 60 * 60 * 24))
    return days[milSec % 14]
}

const timeTravel = ({ date, hour, minute, second }) => {
    date.setHours(hour)
    date.setMinutes(minute)
    date.setSeconds(second)
    return date
}