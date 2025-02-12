const mongoose = require('mongoose')

const Schema=mongoose.Schema({
    price:Number,
    ProductName:String,
    TotalAmt:Number,
    ProductDescription:String,
    ProductCount:Number,
    products:[{productId:String,quantity:Number}]
})

module.exports=mongoose.model("cart",Schema)
