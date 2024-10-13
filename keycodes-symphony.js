export const compose = () => {
    document.addEventListener('keydown', (event) => {
        const key = event.key

        if (key.length === 1 && /^[a-z]$/.test(key)) {
            createNote(key)
        } else if (key === 'Backspace') {
            removeLastNote()
        } else if (key === 'Escape') {
            removeAllNotes()
        }
    })
}

const createNote = (key) => {
    const nt = document.createElement('div')
    nt.className = 'note'
    nt.textContent = key
    nt.style.background = rgb(key)
    document.body.appendChild(nt)
}

const removeLastNote = () => {
    const lnt = document.body.querySelector('.note:last-child')
    lnt?.remove()
}

const removeAllNotes = () => {
    document.body.querySelectorAll('.note').forEach(nt => nt.remove())
}

const rgb = (char) => {
    const hash = char.charCodeAt(0)
    return `rgb(${(hash * 70) % 256}, ${(hash * 90) % 256}, ${(hash * 110) % 256})`
}