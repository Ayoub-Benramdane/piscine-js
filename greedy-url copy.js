const getURL = (dataSet) => {
    const regEx = /https?:\/\/[^\s]+/g
    return (dataSet.match(regEx) || [])
}

const greedyQuery = (dataSet) => {
    const regEx = /(https?:\/\/)([^\&\s]+)(\&[^\&\s]+){2,}/g
    return (dataSet.match(regEx) || [])
}

const notSoGreedy = (dataSet) => {
    const regEx = /(https?:\/\/)([^\&\s]+)(\&[^\&\s]+){1,2}(?=\s)/g
    return (dataSet.match(regEx) || [])
}