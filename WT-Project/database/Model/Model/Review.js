const mongoose = require('mongoose')


const Schema = mongoose.Schema({
    productId: ObjectId("product_id"),
    userId: ObjectId("user_id"),
    rating: "Number",
    review: "string",
    createdAt: "date",
    updatedAt: "date"
})


module.exports = mongoose.model("Review", Schema)