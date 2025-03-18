const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    items: [{
        _id: mongoose.Schema.Types.ObjectId,
        quantity: { type: Number, required: true, min: 1 }
    }],
    totalPrice: { type: Number, default: 0 }
});

module.exports = mongoose.models.Cart || mongoose.model('Cart', cartSchema);