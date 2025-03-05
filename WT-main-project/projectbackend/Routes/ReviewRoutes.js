const express=require('express')
const review=require('../models/review')
const reviewrouter=express.Router();

reviewrouter.get('/',async (req,res)=>{
    try {
        const data = await review.find();
        res.send(data);
    } catch (error) {
        res.send(error);
    }
})

reviewrouter.get('/:id',async (req,res)=>{
    try {
        const data = await review.findById(req.params.id);
        if (!data) {
            return res.send("User not found");
        }
        res.send(data);
    } catch (error) {
        return res.send(error);
    }
})

reviewrouter.post('/',async (req,res)=>{
     if (!req.body || Object.keys(req.body).length === 0) {
            return res.send("Please provide the required data");
        }
        try {
            const data = await review.create(req.body);
            res.send(data)
        } catch (error) {
            return res.send(error);
        }
})

reviewrouter.patch('/:id',async (req,res)=>{
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.send("Please provide data to update");
    }
    try {
        const data = await review.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) {
            return res.send("User not found");
        }
        res.send(data);
    } catch (error) {
        return res.send(error);
    }
})

reviewrouter.delete('/:id?',async (req,res)=>{
    if (!req.params.id) {
        return res.send("Please provide an ID");
    }
    try {
        const data = await review.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.send("User not found");
        }
        res.send({ message: "User deleted successfully", data });
    } catch (error) {
        return res.send(error);
    }
})
module.exports=reviewrouter;