//npm - global command, comes with node
//npm --version

//local dependency - use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
// sudo install -g <packageName> (mac)

//package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm inti -y (everything default)

//LODASH EXAMPLES
// const _ = require('lodash')

// const items = [1,[2,[3,[4]]]]

// const newItems = _.flattenDeep(items)
// console.log(newItems)
// console.log('Hello world')

const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home Page')
    }
    if (req.url === '/about') {
        // blocking code !!!
        for(let i= 0; i<1000; i++) {
            for(let j= 0; j < 1000; j++){
                console.log(`${i} ${j}`)
            }
        }
        res.end('About page')
    }
    res.end('Error Page')
})

server.listen(5000, () => {
    console.log('Server listening on port : 5000...')
})