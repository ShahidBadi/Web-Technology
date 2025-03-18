const express = require('express');
const router = express.Router();
const Review = require('../models/review');

// Get all reviews
router.get('/', async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: "Error fetching reviews", details: error.message });
    }
});

// Get reviews by Product ID
router.get('/product/:id', async (req, res) => {
    try {
        const reviews = await Review.find({ productId: req.params.id });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: "Error fetching reviews", details: error.message });
    }
});

// Add a new review
router.post('/', async (req, res) => {
    try {
        const newReview = new Review(req.body);
        await newReview.save();
        res.status(201).json({ message: "Review added successfully" });
    } catch (error) {
        res.status(400).json({ error: "Error adding review", details: error.message });
    }
});

// Delete a review
router.delete('/:id', async (req, res) => {
    try {
        const deletedReview = await Review.findByIdAndDelete(req.params.id);
        if (!deletedReview) {
            return res.status(404).json({ error: "Review not found" });
        }
        res.json({ message: "Review deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting review", details: error.message });
    }
});

module.exports = router;
