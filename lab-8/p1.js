const express=require('express')
const app=express();

app.use("/students",(req,res,next)=>{
    console.log("middleware called")
    next();
})
app.get("/students",(req,res)=>{
    res.send("hello world")
})
app.get("/students/home",(req,res)=>{
    res.send("Home page")
})
app.get("/students/contact",(req,res)=>{
    res.send("contact page")
})
app.listen(8000,(req,res)=>{
    console.log("server started")
})