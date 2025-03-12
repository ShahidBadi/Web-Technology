const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Cart = require('../models/cart');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Helper function to generate JWT token
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Helper function to verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ error: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id; // Attach the user ID to the request object
        next();
    } catch (error) {
        res.status(400).json({ error: "Invalid token" });
    }
};

// User registration
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        // Assign a new cart to the user
        const newCart = new Cart({ userId: newUser._id, items: [] });
        await newCart.save();

        // Generate JWT token
        const token = generateToken(newUser._id);

        res.status(201).json({ message: "User created successfully", token });
    } catch (error) {
        res.status(500).json({ error: "Error creating user", details: error.message });
    }
});

// User login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Compare the password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid password" });
        }

        // Generate JWT token
        const token = generateToken(user._id);

        res.json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ error: "Error logging in", details: error.message });
    }
});

// Get all users 
router.get('/', verifyToken, async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Error fetching users", details: error.message });
    }
});

// Get user by ID 
router.get('/:id', verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Error fetching user", details: error.message });
    }
});

// Update user 
router.put('/:id', verifyToken, async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json({ message: "User updated successfully" });
    } catch (error) {
        res.status(400).json({ error: "Error updating user", details: error.message });
    }
});

// Delete user 
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting user", details: error.message });
    }
});

module.exports = router;