const mongoose = require('mongoose')
const product = require('./product')
const cart = require('./cart')

const Schema=mongoose.Schema({
    OrderId:Number,
    ShippingAddress:[{
        Street:String,
        City:String,
        State:String,
        PostalCode:Number,
        Country:String
    }],
    OrderDate:Date,
    ProductName:{type: mongoose.Schema.Types.ObjectId,ref:'product'},
    Paymentmethod:String,
    Paymentdate:Date,
    TotalAmt:{type: mongoose.Schema.Types.ObjectId,ref:'cart'},
})