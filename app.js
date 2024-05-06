const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    if(req.url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>Node App</title><head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name "message"><button type="submit">Send</button></form><body>')
        res.write('</html>')
        return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title>Node App</title><head>')
    res.write('<body><h1>Welcome to my app</h1><body>')
    res.write('</html>')
    res.end();
})

server.listen(3000,()=>{
    console.log("Server started at port 3000")
})