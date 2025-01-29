const mongoose=require('mongoose')

const Schema=mongoose.Schema({
    AdminId:Number,
    adminName:String,
    adminPassword:String,
    adminPhone:Number,
    adminEmail:String,
    adminAddress:[{
        Street:String,
        City:String,
        State:String,
        PostalCode:Number,
        Country:String
    }]
})

module.exports=mongoose.model('admin',Schema)