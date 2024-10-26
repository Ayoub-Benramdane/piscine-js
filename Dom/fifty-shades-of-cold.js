import { colors } from './fifty-shades-of-cold.data.js'

export const generateClasses = () => {
    const styleTag = document.createElement('style')
    colors.forEach(clr => {
        styleTag.innerHTML += `
            .${clr} {
                background: ${clr};
            }
        `
    })
    document.head.appendChild(styleTag)
}

export const generateColdShades = () => {
    const clrs = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple']
    colors.forEach(clr => {
        if (clrs.some(keyword => clr.includes(keyword))) {
            const div = document.createElement('div')
            div.classList.add(clr)
            div.textContent = clr
            document.body.appendChild(div)
        }
    })
}

export const choseShade = (arg) => {
    document.querySelectorAll('div').forEach(d => {
        d.className = arg
    })
};
