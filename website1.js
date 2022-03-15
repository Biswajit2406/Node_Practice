const http=require('http')
const fs=require('fs')

const data=fs.readFileSync('index.html')
const port= process.env.PORT || 3000;
const server = http.createServer((req, res)=>{
    console.log(req.url)
    res.setHeader('Content-Type', 'text/html');
    if(req.url=='/'){
        req.statusCode=200;
        res.end('<h1>This is About</h1> <p>This is my server</p>');}
    else if(req.url=='/about'){
        req.statusCode=200;
        res.end(data.toString());}
    else{
        //res.harry();
        req.statusCode=404
        res.end('<h1>Not Found</h1>');}
})
server.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})
