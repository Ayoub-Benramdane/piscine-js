const arg = process.argv[2]

export const verydisco = (args) => {
    return args.split(' ').map(arg => {
        let index = Math.ceil(arg.length / 2)
        return arg.slice(index) + arg.slice(0, index)
    }).join(' ')
}

console.log(verydisco(arg))