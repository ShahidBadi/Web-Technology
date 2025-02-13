const mongoose = require('mongoose')
const product = require('./product')
const cart = require('./cart')

const Schema = mongoose.Schema({
    userId: {type:mongoose.Schema.Types.ObjectId, ref:'user'},
    orderNumber: Number,
    orderStatus: String,
    paymentStatus:String,
    shippingAddress: {
        street: String,
        city: String,
        state: String,
        zip: Number,
        country:String
    },
    items: [{
            productId: {type:mongoose.Schema.Types.ObjectId, ref:'Product'},
            quantity: Number,
            price:Number,
            total:Number
        },
    ],
    totalAmount: Number,
    paymentMethod: String,
    shippingMethod: String,
    trackingNumber: Number,
    createdAt: Date,
    updatedAt: Date,
    shippedAt: Date,
    deliveredAt: Date
})


module.exports = mongoose.model("order", Schema)