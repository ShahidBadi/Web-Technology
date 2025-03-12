const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phone: Number,
    addresses: [{
        street: String,
        city: String,
        state: String,
        zip: Number,
        country: String,
        isPrimary: Boolean
    }]
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);