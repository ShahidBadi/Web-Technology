const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    if(req.url=="/about"){
        res.statusCode=200;
        res.setHeader('Content-Type,text/html');
        res.end("<h1>hello world</h1>")
        // fs.readFile("about.txt",(err,data)=>{
        //     if(err){
        //         throw err
        //     }
        //     res.end(data)
        // })
    }
    else if(req.url=="/contact"){
        fs.readFile("contact.txt",(err,data)=>{
            if(err){
                throw err
            }
            res.end(data)
        })
    }
})

server.listen(3000,()=>{
    console.log("server started at 3000")
})