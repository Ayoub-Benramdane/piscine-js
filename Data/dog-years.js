const dogYears = (name, age) => {
    let pla = 1
    if (name == "mercury") pla = 0.2408467
    else if (name == "uranus") pla = 84.016846
    else if (name == "venus") pla = 0.61519726
    else if (name == "mars") pla = 1.8808158
    else if (name == "jupiter") pla = 11.862615
    else if (name == "saturn") pla = 29.447498
    else if (name == "neptune") pla = 164.79132
    return parseFloat((age / pla / 31557600 * 7).toFixed(2))
}