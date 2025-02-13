const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config()

const userRoute=require('./Routes/UserRoutes');
const reviewRoute=require('./Routes/ReviewRoutes');
const orderRoute=require('./Routes/OrderRoutes');
const productRoute=require('./Routes/ProductRoutes');
const paymentRoute=require('./Routes/PaymentRoutes.js');
const categoriesrouter = require('./Routes/CategoriesRoutes.js');
const cartrouter = require('./Routes/CartRoutes.js');

const bodyParser = require('body-parser');


mongoose.connect(process.env.dbUrl).then(()=>{
    console.log("connected to db");
    
    const app=express();
    app.use(express.json())
    app.use(bodyParser.json())

    app.use('/users',userRoute)
    app.use('/review',reviewRoute)
    app.use('/order',orderRoute)
    app.use('/product',productRoute)
    app.use('/payment',paymentRoute)
    app.use("/categories",categoriesrouter)
    app.use("/cart",cartrouter)
    
    

    app.listen(process.env.Port,()=>{
        console.log("server started");
        
    }) 
})