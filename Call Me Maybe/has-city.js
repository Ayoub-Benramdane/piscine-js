const hasCity = (country, arr) => {
    return (city) => {
        if (arr.includes(city)) {
            return city + " is a city from " + country
        }
        return city + " is not a city from " + country
    }
}