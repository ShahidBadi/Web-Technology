const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');

// Get all admins
router.get('/', async (req, res) => {
    try {
        const admins = await Admin.find();
        res.json(admins);
    } catch (error) {
        res.status(500).json({ error: "Error fetching admins", details: error.message });
    }
});

// Get admin by ID
router.get('/:id', async (req, res) => {
    try {
        const admin = await Admin.findOne(req.params.id);
        if (!admin) {
            return res.status(404).json({ error: "Admin not found" });
        }
        res.json(admin);
    } catch (error) {
        res.status(500).json({ error: "Error fetching admin", details: error.message });
    }
});

// Create admin
router.post('/', async (req, res) => {
    try {
        const newAdmin = new Admin(req.body);
        await newAdmin.save();
        res.status(201).json({ message: "Admin created successfully" });
    } catch (error) {
        res.status(400).json({ error: "Error creating admin", details: error.message });
    }
});

// Update admin
router.put('/:id', async (req, res) => {
    try {
        const updatedAdmin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAdmin) {
            return res.status(404).json({ error: "Admin not found" });
        }
        res.json({ message: "Admin updated successfully" });
    } catch (error) {
        res.status(400).json({ error: "Error updating admin", details: error.message });
    }
});

// Delete admin
router.delete('/:id', async (req, res) => {
    try {
        const deletedAdmin = await Admin.findByIdAndDelete(req.params.id);
        if (!deletedAdmin) {
            return res.status(404).json({ error: "Admin not found" });
        }
        res.json({ message: "Admin deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting admin", details: error.message });
    }
});

module.exports = router;
