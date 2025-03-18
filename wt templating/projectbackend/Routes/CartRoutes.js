const express=require('express')
const cart=require('../models/cart')
const cartrouter=express.Router();

cartrouter.get('/',async (req,res)=>{
    try{
        const data=await cart.find();
         res.send(data)
    }
    catch(error){
        res.send(error);
    }
    
})

cartrouter.get('/:id',async (req,res)=>{
    try {
        const data = await cart.findById(req.params.id);
        if (!data) {
            return res.send("User not found");
        }
        res.send(data);
    } catch (error) {
        return res.send(error);
    }
})

cartrouter.post('/',async (req,res)=>{
   if (!req.body || Object.keys(req.body).length === 0) {
           return res.send("Please provide the required data");
       }
       try {
           const data = await cart.create(req.body);
           res.send(data)
       } catch (error) {
           return res.send(error);
       }
})

cartrouter.patch('/:id',async (req,res)=>{
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.send("Please provide data to update");
    }
    try {
        const data = await cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) {
            return res.send("User not found");
        }
        res.send(data);
    } catch (error) {
        return res.send(error);
    }
})

cartrouter.delete('/:id?',async (req,res)=>{
    if (!req.params.id) {
        return res.status(400).send("Please provide an ID");
    }
    try {
        const data = await cart.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.send("User not found");
        }
        res.send({ message: "User deleted successfully", data });
    } catch (error) {
        return res.send(error);
    }
})
module.exports=cartrouter;