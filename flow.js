const flow = (funcs) => {
    return (...func) => {
        let res = funcs[0](...func)
        for (let i = 1; i < funcs.length; i++) {
            res = funcs[i](res)
        }
        return res
    }
}