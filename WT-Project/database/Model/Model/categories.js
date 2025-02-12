const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    _id: ObjectId(),
    Categoryname: "String",
    CategoryId: "Number",
})

module.exports = mongoose.model("categories", Schema)