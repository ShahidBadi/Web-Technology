const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    _id: ObjectId(),
    name: "string",
    description: "string",
    price: "Number",
    discount: "Number",
    stock: "Number",
    category: categoriesid,
    images: [
        "image_url1",
        "image_url2"
    ],
    ratings: {
        average: "Number",
        totalReviews: "Number"
    },

})
module.exports = mongoose.model("Product", Schema)