const filterShortStateName = (arr) => {
    return arr.filter(element => element.length < 7)
}

const filterStartVowel = (arr) => {
    return arr.filter(element => element.match(/^[aeuio]/gi))
}

const filter5Vowels = (arr) => {
    return arr.filter(element => element.match(/[aeuio]/gi) != null && element.match(/[aeuio]/gi).length >= 5)
}

function filter1DistinctVowel(arr) {
    return arr.filter(el => {
        let cout = ''
        for (let i = 0; i < el.length; i++) {
            if (el[i].match(/[aeiou]/i)) {
                if (cout.length >= 1 && el[i].toLowerCase() != cout[0]) return false
                cout += el[i].toLowerCase()
            }
        }
        return cout.length > 0
    })
}

const multiFilter = (arr) => {
    return arr.filter(element => element.capital.length >= 8 && !element.name.match(/^[aeuio]/gi) && element.tag.match(/[aeuio]/i) && element.region != "South")
}