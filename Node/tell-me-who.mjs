import { readdir } from 'fs/promises'

readdir(process.argv[2])
    .then(content => {
        let [name, fname] = [[], []]
        for (let i = 0; i < content.length; i++) {
            name.push(content[i].split('_'))
            fname.push(' ' + name[i][1].split('.')[0] + ' ' + name[i][0])
        }
        fname.sort()
        for (let i = 0; i < fname.length; i++) {
            fname[i] = i+1 +'.' +fname[i]
        }
        console.log(fname.join('\n'))
    })
    .catch(err => console.error('Error reading file:', err))