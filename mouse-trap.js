let edge = null
export const createCircle = function() {
    document.addEventListener('mousedown', ele => {
        const dv = document.createElement('div')
        dv.className = 'circle'
        let x = ele.clientX - 25
        let y = ele.clientY - 25
        dv.style.left = x.toString() + 'px'
        dv.style.top = y.toString() + 'px'
        dv.style.background = 'white'
        document.body.appendChild(dv);
        edge = dv
    })
}

export const moveCircle = function() {
    document.addEventListener('mousemove', e => {
        edge.style.left = `${e.clientX - 25}px`
        edge.style.top = `${e.clientY - 25}px`
        document.body.append(edge)
        let midBox = document.querySelector('div.box')
        let dims = midBox.getBoundingClientRect()

        if (edge.getAttribute('class') !== 'box') {
            if ((+edge.style.left.replace('px', '') > (dims.x)) && (+edge.style.left.replace('px', '') < (dims.right - 50)) && (+edge.style.top.replace('px', '') > (dims.top)) && (+edge.style.top.replace('px', '') < (dims.bottom - 50))) {
                edge.style.background = 'var(--purple)'
            }
        }
        if (e.clientX - 25 < (dims.x) && edge.style.background === 'var(--purple)') {
            edge.style.left = (dims.x).toString() + 'px'
            if (e.clientY - 25 < (dims.top)) edge.style.top = (dims.y).toString() + 'px'
            if (e.clientY - 25 > (dims.bottom - 50)) edge.style.top = (dims.bottom - 50).toString() + 'px'

        } else if (e.clientX - 25 > (dims.right - 50) && edge.style.background === 'var(--purple)') {
            edge.style.left = (dims.right - 50).toString() + 'px'

            if (e.clientY - 25 < (dims.top)) edge.style.top = (dims.y).toString() + 'px'
            if (e.clientY - 25 > (dims.bottom - 50)) edge.style.top = (dims.bottom - 50).toString() + 'px'
        } else if ((e.clientY - 25 > (dims.bottom - 50)) && edge.style.background === 'var(--purple)') edge.style.top = (dims.bottom - 50).toString() + 'px'
          else if ((e.clientY - 25 < (dims.top)) && edge.style.background === 'var(--purple)') edge.style.top = (dims.top).toString() + 'px'
    })
}

export const setBox = function() {
    const dv = document.createElement('div')
    dv.className = 'box'
    document.body.append(dv)
}
