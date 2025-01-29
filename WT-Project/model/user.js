const mongoose=require('mongoose')

const Schema=mongoose.Schema({
    UserId:Number,
    UserFirstName:String,
    UserLastName:String,
    UserPassword:String,
    UserEmail:String,
    UserPhone:Number,
    UserAddress:[{
        Street:String,
        City:String,
        State:String,
        PostalCode:Number,
        Country:String
    }]
})
module.exports=mongoose.model('user',Schema)