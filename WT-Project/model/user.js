const mongoose=require('mongoose')

const Schema=mongoose.Schema({
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
    }],
    // favourites:[id],
    CartId:{type: mongoose.Schema.Types.ObjectId,ref:'cart'},
});
module.exports=mongoose.model('user',Schema)