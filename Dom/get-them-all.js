export const getArchitects = () => {
    return [document.querySelectorAll('a'), document.querySelectorAll('span')]
}

export const getClassical = () => {
    let [classical, non_classical] = [[], []]
    getArchitects()[0].forEach(e => { e.classList.contains('classical') ? classical.push(e) : non_classical.push(e) })
    return [classical, non_classical]
}

export const getActive = () => {
    let [active, non_active] = [[], []]
    getClassical()[0].forEach(e => { e.classList.contains('active') ? active.push(e) : non_active.push(e) })
    return [active, non_active]
}

export const getBonannoPisano = () => {
    let non_BonannoPisano = []
    getActive()[0].forEach(e => { e.id != 'BonannoPisano' ? non_BonannoPisano.push(e) : _ })
    return [document.getElementById('BonannoPisano'), non_BonannoPisano]
}