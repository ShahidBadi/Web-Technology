const mongoose = require('mongoose')

const Schema=mongoose.Schema({
    Name:String,
    Img:String
})

module.exports=mongoose.model("categories",Schema)