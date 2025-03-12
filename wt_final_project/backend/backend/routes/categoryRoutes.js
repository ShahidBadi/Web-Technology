const express = require('express');
const router = express.Router();
const Category = require('../models/categories');

// Get all categories
router.get('/', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: "Error fetching categories", details: error.message });
    }
});

// Add a new category
router.post('/', async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        await newCategory.save();
        res.status(201).json({ message: "Category added successfully" });
    } catch (error) {
        res.status(400).json({ error: "Error adding category", details: error.message });
    }
});

module.exports = router;
