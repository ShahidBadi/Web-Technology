const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    _id: ObjectId(),
    AdminId: "Number",
    adminName: "String",
    adminPassword: "String",
    adminPhone: "Number",
    adminEmail: "String",

})

module.exports = mongoose.model('admin', Schema)