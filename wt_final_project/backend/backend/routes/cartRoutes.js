const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');

const calculateTotalPrice = async (items) => {
    let total = 0;
    for (const item of items) {
        const product = await Product.findById(item.productId);
        if (product) {
            total += product.price * item.quantity;
        }
    }
    return total;
};

// Get all carts
router.get('/', async (req, res) => {
    try {
        const carts = await Cart.find();
        res.json(carts);
    } catch (error) {
        res.status(500).json({ error: "Error fetching carts", details: error.message });
    }
});

// Get cart by user ID
router.get('/:userId', async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        if (!cart) {
            return res.status(404).json({ error: "Cart not found" });
        }
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: "Error fetching cart", details: error.message });
    }
});

// Add item to cart
router.post('/', async (req, res) => {
    try {
        let cart = await Cart.findOne({ userId: req.body.userId });
        if (!cart) {
            cart = new Cart({ userId: req.body.userId, items: req.body.items });
        } else {
            cart.items = req.body.items;
        }
        cart.totalPrice = await calculateTotalPrice(cart.items);
        await cart.save();
        res.status(201).json({ message: "Cart updated successfully", cart });
    } catch (error) {
        res.status(400).json({ error: "Error updating cart", details: error.message });
    }
});
// Delete cart by user ID
router.delete('/:userId', async (req, res) => {
    try {
        const deletedCart = await Cart.findOneAndDelete({ userId: req.params.userId });
        if (!deletedCart) {
            return res.status(404).json({ error: "Cart not found" });
        }
        res.json({ message: "Cart deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting cart", details: error.message });
    }
});

module.exports = router;
