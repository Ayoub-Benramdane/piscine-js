function  interpolation (obj) {
    let {step, start, end, callback, duration} = obj
    const res = (end - start) / step
    const wait = duration / step
    let count = 0
    const timer = setInterval(() => {
        if (count < step) {
            const y = wait * (count + 1)
            callback([start, y])
        
            start += res
            count++
        } else {
            clearInterval(timer)
        }
    }, wait)
}