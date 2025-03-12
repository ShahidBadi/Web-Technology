const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    orderId: mongoose.Schema.Types.ObjectId,
    paymentMethod: String,
    amount: Number,
    transactionId: String,
    paymentDate: { type: Date, default: Date.now }
});

module.exports = mongoose.models.Payment || mongoose.model('Payment', paymentSchema);