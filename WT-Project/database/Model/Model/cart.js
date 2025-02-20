const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    userId: ObjectId("user_id"),
    items: [{
            productId: ObjectId("product_id"),
            quantity: "Number",
            price: "Number",
            total: "Number"
        },
        {
            productId: ObjectId("product_id2"),
            quantity: "Number",
            price: "Number",
            total: "Number"
        }
    ],
    totalAmount: "Number",
    createdAt: "date",
    updatedAt: "date"
})

module.exports = mongoose.model("cart", Schema)