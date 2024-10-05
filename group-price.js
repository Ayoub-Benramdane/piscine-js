const pricePattern = /(\$|USD)(\d+)\.?(\d+)?/g
const groupPrice = (str) => {
    const allPrices = []
    const prices = str.match(pricePattern)

    if (!prices) return [];
    
    for (const price of prices) {
        const splited = price.split(pricePattern)
        allPrices.push([price, ...splited.slice(2, splited.length-1)])
    }
    return allPrices || []
}