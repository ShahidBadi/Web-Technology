const mongoose = require('mongoose')

const Schema=mongoose.Schema({
    CartId:Number,
    Price:Number,
    ProductName:String,
    TotalAmt:Number,
    ProductDescription:String,
    ProductCount:Number
})

module.exports=mongoose.model("cart",Schema)