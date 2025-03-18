const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    userId: {type:mongoose.Schema.Types.ObjectId, ref:'user'},
    items: [{
            productId:  {type:mongoose.Schema.Types.ObjectId, ref:'Product'},
            quantity: Number,
            price: Number,
            total: Number
        }
    ],
    totalAmount: Number,
    createdAt: Date,
    updatedAt: Date
})

module.exports = mongoose.model("cart", Schema)