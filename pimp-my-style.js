import { styles } from './pimp-my-style.data.js'
let i = 0
let up = true
let back = false

export const pimp = () => {
    const button = document.querySelector('button').classList

    if (i === -1 && back) up = true
    else if (i === styles.length) up = false

    if (i === styles.length) i--
    if (i === -1) i++
    if (up) {
        button.add(styles[i])
        i++
    } else {
        button.remove(styles[i])
        i--
    }
    if (i === styles.length || (i === -1 && back)) {
        back = true;
        button.toggle("unpimp");
    }
}