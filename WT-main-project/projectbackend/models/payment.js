const mongoose = require('mongoose')
const order = require('./order')

const Schema = mongoose.Schema({
    orderId: {type:mongoose.Schema.Types.ObjectId, ref:'order'},
    paymentMethod: String,
    amount:Number,
    transactionId: Number,
    paymentDate: Date,
    paymentTime: Date,
})


module.exports = mongoose.model("Payment", Schema)