import { log } from 'console'
import { readdir } from 'fs/promises'

readdir(process.argv[2]? process.argv[2] : process.argv[1])
.then(content => {
    log(`${content.length}`)
})
.catch(err => console.error('Error reading file:', err))