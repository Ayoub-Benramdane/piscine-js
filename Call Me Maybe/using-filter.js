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
    return arr.filter(element => {
        let vowel = ''
        for (let i = 0; i < element.length; i++) {
            if (element[i].match(/[aeiou]/i)) {
                if (vowel.length >= 1 && element[i].toLowerCase() != vowel) return false
                vowel = element[i].toLowerCase()
            }
        }
        return vowel.length > 0
    })
}

const multiFilter = (arr) => {
    return arr.filter(element => element.capital.length >= 8 && !element.name.match(/^[aeuio]/gi) && element.tag.match(/[aeuio]/i) && element.region != "South")
}