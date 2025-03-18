const mongoose = require('mongoose')


const Schema = mongoose.Schema({
    productId: {type:mongoose.Schema.Types.ObjectId, ref:'Product'},
    userId: {type:mongoose.Schema.Types.ObjectId, ref:'user'},
    rating: Number,
    review: String,
    createdAt: Date,
    updatedAt: Date
})


module.exports = mongoose.model("Review", Schema)