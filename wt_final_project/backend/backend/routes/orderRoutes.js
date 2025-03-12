const express = require("express");
const router = express.Router();
const Order = require("../models/order");

// Place an order
router.post("/place", async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.status(201).json({ message: "Order placed successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to place order", details: error.message });
    }
});

// Get orders by user ID
router.get("/:userId", async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId });
        if (orders.length === 0) {
            return res.status(404).json({ error: "No orders found for this user" });
        }
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch orders", details: error.message });
    }
});

module.exports = router;
