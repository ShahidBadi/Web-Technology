const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    // _id: ObjectId(),
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phone: Number,
    usercartID: Number,
    addresses: [{
            street: String,
            city: String,
            state: String,
            zip: Number,
            country: String,
            isPrimary: Boolean
        },
    ],
})
module.exports = mongoose.model('user', Schema)