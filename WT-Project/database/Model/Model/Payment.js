const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    _id: ObjectId(),
    orderId: ObjectId("order_id"),
    paymentMethod: "string",
    amount: "Number",
    transactionId: "Number",
    paymentDate: "date",
    paymentTime: "date",
})


module.exports = mongoose.model("Payment", Schema)