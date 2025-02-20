const mongoose = require('mongoose')

const Schema = mongoose.Schema({
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
            isPrimary: boolean
        },
    ],
})
module.exports = mongoose.model('user', Schema)