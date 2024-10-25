import { readFile } from 'fs/promises'
import { writeFile } from 'fs/promises'

readFile(process.argv[2], 'utf8')
    .then(content => {
        let res
        if (process.argv[3] === 'encode') {
            res = Buffer.from(content).toString('base64')
            if (!process.argv[4]) writeFile('cypher.txt', res)
            else writeFile(process.argv[4], res)
        } else {
            res = Buffer.from(content, 'base64').toString('utf8')
            if (!process.argv[4]) writeFile('clear.txt', res)
            else writeFile(process.argv[4], res)
        }
    })
    .catch(err => console.error('Error reading file:', err))