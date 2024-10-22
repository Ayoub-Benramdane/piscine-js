const throttle = (func, wait = 10) => {
    let shouldWait = false
    let waitArg
    return (...arg) => {
        if (shouldWait) {
            waitArg = arg
            return
        }
        func(...arg)
        shouldWait = true
        setTimeout( () => {
            shouldWait = false
        }, wait)
    }
}

function opThrottle(func, wait, obj) {
    let timer = null
    let lastArgs = null
    const timeup = () => {
        if (obj?.trailing && lastArgs) {
            func(...lastArgs)
            lastArgs = null
            timer = setTimeout(timeup, wait)
        } else timer = null
    }
    return function (...args) {
        lastArgs = args
        if (!timer && obj?.leading) func(...args)
        if (!timer) timer = setTimeout(timeup, wait)
        if (obj?.trailing) lastArgs = args
    }
}