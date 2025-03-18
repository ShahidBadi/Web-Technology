const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    stock: Number,
    category: String,
    images: [String],
    rating: Number
});

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);