function filterEntries(obj, ...func) {
    return Object.fromEntries(Object.entries(obj).filter(...func))
}

function mapEntries(obj, ...func) {
    return Object.fromEntries(Object.entries(obj).map(...func))
}

function reduceEntries(obj, ...func) {
    return Object.entries(obj).reduce(...func)
}

function totalCalories(obj) {
    return +reduceEntries(obj, (acc, [key, v]) => acc + (nutritionDB[key].calories * v / 100), 0).toFixed(1)
}

function lowCarbs(obj) {
    return filterEntries(obj, ([key, v]) => Number(nutritionDB[key].carbs * v / 100 < 50))
}

function cartTotal(obj) {
    return mapEntries(obj, ([key, v]) => {
        return [key, mapEntries(nutritionDB[key], ([key, va]) => [key, Number((va * v / 100).toFixed(3))])]
    })
}