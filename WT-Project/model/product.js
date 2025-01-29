const mongoose = require('mongoose')
const categories=require('./categories')

const Schema=mongoose.Schema({
    ProductId:Number,
    CategoryID:{type: mongoose.Schema.Types.ObjectId,ref:'categories'},
    ProductName:String,
    ProductPrice:Number,
    ProductDescription:String,
    ProductStock:Number,
    ProductImg:String,
    ProductFavourite:Boolean

})
module.exports=mongoose.model("Product",Schema)