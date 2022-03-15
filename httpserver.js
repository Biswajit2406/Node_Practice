const http=require('http')

const port= process.env.PORT || 3000;
const server = http.createServer((req, res)=>{
    console.log(req.url)
    req.statusCode=200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>This is Biswajit</h1> <p>This is my server</p>');
})
server.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})
