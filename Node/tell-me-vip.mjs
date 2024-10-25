import { readFile } from 'fs/promises'
import { writeFile } from 'fs/promises'
import { readdir } from 'fs/promises'

readdir(process.argv[2])
    .then(async (content) => {
        let file = []
        for (const filename of content)  {
            const cnt = await readFile(process.argv[2] + '/' + filename, 'utf8')
            let i2 = JSON.parse(cnt)
            if (i2.answer === "yes") file.push(filename)
        }
        let [name, fname] = [[], []]
        for (let i = 0; i < file.length; i++) {
            name.push(file[i].split('_'))
            fname.push(' ' + name[i][1].split('.')[0] + ' ' + name[i][0])
        }
        fname.sort()
        for (let i = 0; i < fname.length; i++) {
            fname[i] = i + 1 + '.' + fname[i]
        }
        writeFile('vip.txt',fname.join('\n'))
    })
    .catch(err => console.error('Error reading file:', err))