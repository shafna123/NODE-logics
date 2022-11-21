var http = require('http')
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type': 'text/html'})
    res.write("<h1>hi</h1>")
    res.end("hello")
}).listen(4000,()=>{
    console.log("server is running on 4000")
})