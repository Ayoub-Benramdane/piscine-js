const citiesOnly = (arr) => {
  return arr.map(element => element.city)
}

const upperCasingStates = (arr) => {
  return arr.map(ele => ele.replace(/(?<=^|\s)([a-z])/g, match => match.toUpperCase()))
}

const fahrenheitToCelsius = (arr) => {
  return arr.map(element => element.split('°')).map(element => Math.floor((element[0] - 32) * 5 / 9) + "°C")
}

const trimTemp = (arr) => {
  let arrMdf = arr.map(element => element.temperature.replace(/\s/g, ''))
  for (let i = 0; i < arr.length; i++) arr[i].temperature = arrMdf[i]
  return arr
}

const tempForecasts = (arr) => {
  arr = trimTemp(arr)
  return arr.map(element => fahrenheitToCelsius(element.temperature.split())+ "elsius in " + element.city + ", " + upperCasingStates(element.state.split()))
}
