const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
const test =  readFileSync('./content/subfolder/test.txt', 'utf8')
// console.log(first, second)
// console.log(test)

writeFileSync(
    './content/result-sync.txt',
    `here is the result : ${first}, ${second}`,
    { flag: 'a' }
)