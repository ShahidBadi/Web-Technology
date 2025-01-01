const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url=="/home"){
        res.end("home page")
    }
    else if(req.url=="/about"){
        res.end("about page")
    }
    else if(req.url=="/contact"){
        res.end("contact page")
    }
    else if(req.url=="/faculty"){
        res.end("faculty page")
    }
    else if(req.url=="/student"){
        res.end("student page")
    }
})
server.listen(3000,()=>{
    console.log("sever started at 3000")
})