const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    Categoryname: String,
    CategoryId: Number,
    Img:String
})

module.exports = mongoose.model("categories", Schema)