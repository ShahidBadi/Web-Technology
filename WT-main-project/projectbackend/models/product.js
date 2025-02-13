const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    name: String,
    description: String,
    price: String,
    discount: String,
    stock: String,
    category:{type:mongoose.Schema.Types.ObjectId, ref:'categories'},
    images: [
        "image_url1",
        "image_url2"
    ],
    ratings: {
        average: Number,
        totalReviews: Number
    },

})
module.exports = mongoose.model("Product", Schema)