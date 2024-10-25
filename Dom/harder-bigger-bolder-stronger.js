export const generateLetters = () => {
    const ascii = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const all = 120
    const min = 11
    const stp = (130 - min) / all

    for (let i = 0; i < all; i++) {
        const ch = ascii[Math.floor(Math.random() * ascii.length)]
        const div = document.createElement('div')
        div.textContent = ch
        div.style.fontSize = `${Math.ceil(min + i * stp)}px`

        if (i < all / 3) div.style.fontWeight = '300'
        else if (i < 2 * all / 3) div.style.fontWeight = '400'
        else div.style.fontWeight = '600'
        document.body.append(div)
    }
}
