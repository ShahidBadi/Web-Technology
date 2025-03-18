const express=require('express')
const product=require('../models/product')
const productrouter=express.Router();

productrouter.get('/',async (req,res)=>{
    try {
        const data = await product.find();
        res.send(data);
    } catch (error) {
        res.send(error);
    }
})

productrouter.get('/:id',async (req,res)=>{
    try {
        const data = await product.findById(req.params.id);
        if (!data) {
            return res.send("User not found");
        }
        res.send(data);
    } catch (error) {
        return res.send(error);
    }
})

productrouter.post('/',async (req,res)=>{
   if (!req.body || Object.keys(req.body).length === 0) {
           return res.send("Please provide the required data");
       }
       try {
           const data = await product.create(req.body);
           res.send(data)
       } catch (error) {
           return res.send(error);
       }
})

productrouter.patch('/:id',async (req,res)=>{
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.send("Please provide data to update");
    }
    try {
        const data = await product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) {
            return res.send("User not found");
        }
        res.send(data);
    } catch (error) {
        return res.send(error);
    }
})

productrouter.delete('/:id?',async (req,res)=>{
    if (!req.params.id) {
        return res.send("Please provide an ID");
    }
    try {
        const data = await product.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.send("User not found");
        }
        res.send({ message: "User deleted successfully", data });
    } catch (error) {
        return res.send(error);
    }
})
module.exports=productrouter;