export const generateLetters = () => {
    const ascii = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const all = 120
    for (let i = 0; i < all; i++) {
        const div = document.createElement('div')
        div.textContent = ascii[Math.floor(Math.random() * ascii.length)]
        div.style.fontSize = `${Math.ceil(i + 11)}px`
        if (i < all / 3) div.style.fontWeight = '300'
        else if (i < 2 * all / 3) div.style.fontWeight = '400'
        else div.style.fontWeight = '600'
        document.body.append(div)
    }
}
