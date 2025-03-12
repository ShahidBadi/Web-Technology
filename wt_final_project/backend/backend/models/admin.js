const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    adminName: String,
    adminPassword: String,
    adminPhone: Number,
    adminEmail: String
});

module.exports = mongoose.model('Admin', adminSchema);