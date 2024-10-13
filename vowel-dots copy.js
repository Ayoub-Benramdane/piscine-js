let vowels = /[aeoiu]/gi
const vowelDots = (str) => {
    return str.replaceAll(vowels, "$&.")
}