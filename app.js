const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("Hello World")
})

server.listen(3000,()=>{
    console.log("Server started at port 3000")
})