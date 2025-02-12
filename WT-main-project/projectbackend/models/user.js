const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    // _id: ObjectId(),
    firstName: "string",
    lastName: "string",
    email: "string",
    password: "string",
    phone: "Number",
    usercartID: "string",
    addresses: [{
            street: "string",
            city: "string",
            state: "string",
            zip: "Number",
            country: "string",
            // isPrimary: true
        },
        {
            street: "string",
            city: "string",
            state: "string",
            zip: "Number",
            country: "string",
            // isPrimary: false
        }
    ],
})
module.exports = mongoose.model('user', Schema)