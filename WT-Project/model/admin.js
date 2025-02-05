const mongoose=require('mongoose')

const Schema=mongoose.Schema({
    AdminId:Number,
    AdminName:String,
    AdminPassword:String,
    AdminPhone:Number,
    AdminEmail:String,
    adminAddress:[{
        Street:String,
        City:String,
        State:String,
        PostalCode:Number,
        Country:String
    }]
})

module.exports=mongoose.model('admin',Schema)