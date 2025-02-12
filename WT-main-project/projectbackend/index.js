const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config()
const userRoute=require('./Routes/UserrRoutes');
const bodyParser = require('body-parser');

mongoose.connect(process.env.dbUrl).then(()=>{
    console.log("connected to db");
    
    const app=express();

    app.use(bodyParser.json())
    app.use('/users',userRoute)

    app.listen(process.env.Port,()=>{
        console.log("server started");
        
    })


    
})