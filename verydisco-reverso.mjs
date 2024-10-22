import { readFile } from 'fs/promises'

const verydisco = (args) => {
    return args.split(' ').map(arg => {
        let index = Math.floor(arg.length / 2)
        return arg.slice(index) + arg.slice(0, index)
    }).join(' ')
}

readFile(process.argv[2], 'utf8')
.then(content => {
    console.log(verydisco(content))
})
.catch(err => console.error('Error reading file:', err))