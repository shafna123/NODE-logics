const http = require('http');

var app = http.createServer((req,res)=>{
    res.end("Hello")
});

app.listen(3000)