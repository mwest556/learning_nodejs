const http = require('http')

const server = http.createServer((req, res)=>{
// res.write('welcome to our home page')
// res.end()
if (req.url === '/') {
    res.end('Welcome to our homepage')
}
else if (req.url === '/about') {
    res.end('Find out more about us')
}
else{
    res.end(`
    <h1> Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>`)
}
})
server.listen(5000)