export const compose = () => {
    document.addEventListener('keydown', (event) => {
        const key = event.key

        if (/^[a-z]$/.test(key)) createNote(key)
        else if (key === 'Backspace') removeLastNote()
        else if (key === 'Escape') removeAllNotes()
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
    document.body.querySelector('.note:last-child').remove()
}

const removeAllNotes = () => {
    document.body.querySelectorAll('.note').forEach(nt => nt.remove())
}

const rgb = (char) => {
    const hash = char.charCodeAt(0)
    return `rgb(${(hash * 20) % 256}, ${(hash * 40) % 256}, ${(hash * 60) % 256})`
}