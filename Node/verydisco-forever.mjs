import { writeFile } from 'fs/promises'
import { verydisco } from './verydisco.mjs'

const arg = process.argv[2]
const result = verydisco(arg)

writeFile('verydisco-forever.txt', result)