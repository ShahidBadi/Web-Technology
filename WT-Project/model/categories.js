const mongoose = require('mongoose')

const Schema=mongoose.Schema({
    CategoryId:Number,
    Name:String,
    img:String
})

module.exports=mongoose.model("categories",Schema)