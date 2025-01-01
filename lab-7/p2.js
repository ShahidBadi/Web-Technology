const express=require('express')
const app=express();
const fs=require('fs');

app.get('/home',(req,res)=>{
 res.send("home page")
})
app.get('/about',(req,res)=>{
    res.send("about page")
})
app.get('/contact',(req,res)=>{
    res.send("contact page")
})
app.get('/faculty',(req,res)=>{
    res.send("faculty page")
})
app.get('/student',(req,res)=>{
    res.send("student page")
})
app.listen(3000,(req,res)=>{
    console.log("server started at 3000")
})