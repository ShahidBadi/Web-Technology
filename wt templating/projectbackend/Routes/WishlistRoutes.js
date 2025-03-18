const express=require('express')
const wishlist=require('../models/wishlist')
const wishlistrouter=express.Router();

wishlistrouter.get('/',async (req,res)=>{
    try {
        const data = await wishlist.find();
        res.send(data);
    } catch (error) {
        res.send(error);
    }
})

wishlistrouter.get('/:id',async (req,res)=>{
    try {
        const data = await wishlist.findById(req.params.id);
        if (!data) {
            return res.send("User not found");
        }
        res.send(data);
    } catch (error) {
        return res.send(error);
    }
})

wishlistrouter.post('/',async (req,res)=>{
   if (!req.body || Object.keys(req.body).length === 0) {
           return res.send("Please provide the required data");
       }
       try {
           const data = await wishlist.create(req.body);
           res.send(data)
       } catch (error) {
           return res.send(error);
       }
})

wishlistrouter.patch('/:id',async (req,res)=>{
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.send("Please provide data to update");
    }
    try {
        const data = await wishlist.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) {
            return res.send("User not found");
        }
        res.send(data);
    } catch (error) {
        return res.send(error);
    }
})

wishlistrouter.delete('/:id?',async (req,res)=>{
    if (!req.params.id) {
        return res.send("Please provide an ID");
    }
    try {
        const data = await wishlist.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.send("User not found");
        }
        res.send({ message: "User deleted successfully", data });
    } catch (error) {
        return res.send(error);
    }
})


module.exports=wishlistrouter;