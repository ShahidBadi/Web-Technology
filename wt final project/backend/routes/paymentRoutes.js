const express = require('express');
const router = express.Router();
const Payment = require('../models/payment');

// Get all payments
router.get('/', async (req, res) => {
    try {
        const payments = await Payment.find();
        res.json(payments);
    } catch (error) {
        res.status(500).json({ error: "Error fetching payments", details: error.message });
    }
});

// Get payment by order ID
router.get('/:orderId', async (req, res) => {
    try {
        const payment = await Payment.findOne({ orderId: req.params.orderId });
        if (!payment) {
            return res.status(404).json({ error: "Payment not found" });
        }
        res.json(payment);
    } catch (error) {
        res.status(500).json({ error: "Error fetching payment", details: error.message });
    }
});

// Add a new payment
router.post('/', async (req, res) => {
    try {
        const newPayment = new Payment(req.body);
        await newPayment.save();
        res.status(201).json({ message: "Payment recorded successfully" });
    } catch (error) {
        res.status(400).json({ error: "Error recording payment", details: error.message });
    }
});

// Delete payment by order ID
router.delete('/:orderId', async (req, res) => {
    try {
        const deletedPayment = await Payment.findOneAndDelete({ orderId: req.params.orderId });
        if (!deletedPayment) {
            return res.status(404).json({ error: "Payment not found" });
        }
        res.json({ message: "Payment deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting payment", details: error.message });
    }
});

module.exports = router;
