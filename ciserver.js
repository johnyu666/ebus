const http=require('http')

let server=http.createServer();

server.on('request',(req,resp)=>{
    console.log("connect.....")
    resp.end("hello world!")
})

server.listen(3001)