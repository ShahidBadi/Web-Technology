const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    items: [{
        productId: mongoose.Schema.Types.ObjectId,
        quantity: Number
    }],
    totalPrice: { type: Number, default: 0 }
});

module.exports = mongoose.models.Cart || mongoose.model('Cart', cartSchema);