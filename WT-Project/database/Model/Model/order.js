const mongoose = require('mongoose')
const product = require('./product')
const cart = require('./cart')

const Schema = mongoose.Schema({
    userId: ObjectId("user_id"),
    orderNumber: "Number",
    orderStatus: "string",
    paymentStatus: "string",
    shippingAddress: {
        street: "string",
        city: "string",
        state: "string",
        zip: "Number",
        country: "string"
    },
    items: [{
            productId: ObjectId("product_id"),
            quantity: "Number",
            price: "Number",
            total: "Number"
        },

    ],
    totalAmount: "Number",
    paymentMethod: "string",
    shippingMethod: "string",
    trackingNumber: "Number",
    createdAt: "date",
    updatedAt: "date",
    shippedAt: "date",
    deliveredAt: "date"
})


module.exports = mongoose.model("order", Schema)