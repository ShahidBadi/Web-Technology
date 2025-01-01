const express=require('express')
const app=express();
const fs=require('fs');

app.get('/home',(req,res)=>{
    fs.readFile('home.txt',(err,data)=>{
        if(err){
            throw err;
        }
        res.send(data.toString())
    })
})
app.get('/about',(req,res)=>{
    fs.readFile('about.txt',(err,data)=>{
        if(err){
            throw err;
        }
        res.send(data.toString())
    })
})
app.get('/contact',(req,res)=>{
    fs.readFile('contact.txt',(err,data)=>{
        if(err){
            throw err;
        }
        res.send(data.toString())
    })
})
app.get('/faculty',(req,res)=>{
    fs.readFile('faculty.txt',(err,data)=>{
        if(err){
            throw err;
        }
        res.send(data.toString())
    })
})
app.get('/student',(req,res)=>{
    fs.readFile('student.txt',(err,data)=>{
        if(err){
            throw err;
        }
        res.send(data.toString())
    })
})
app.listen(3000,(req,res)=>{
    console.log("server started at 3000")
})