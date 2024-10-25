function debounce(func, delay) {
    let timeout
    return function (...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            func(...args)
        }, delay)
    }
}

function opDebounce(func, wait, option = { leading: false }) {
    let timeout = null
    let called = false
    let { leading } = option
    return function (...args) {
        if (leading && !called) {
            func(...args)
            called = true
        }
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            called = false
            if (!leading) {
                func(...args)
            }
        }, wait)
    }
}