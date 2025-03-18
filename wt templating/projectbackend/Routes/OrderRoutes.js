const express=require('express')
const order=require('../models/order')
const orderrouter=express.Router();

orderrouter.get('/',async (req,res)=>{
    try {
        const data = await order.find();
        res.send(data);
    } catch (error) {
        res.send(error);
    }
})

orderrouter.get('/:id',async (req,res)=>{
    try {
        const data = await order.findById(req.params.id);
        if (!data) {
            return res.send("User not found");
        }
        res.send(data);
    } catch (error) {
        return res.send(error);
    }
})

orderrouter.post('/',async (req,res)=>{
    if (!req.body || Object.keys(req.body).length === 0) {
           return res.send("Please provide the required data");
       }
       try {
           const data = await order.create(req.body);
           res.send(data)
       } catch (error) {
           return res.send(error);
       }
})

orderrouter.patch('/:id',async (req,res)=>{
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.send("Please provide data to update");
    }
    try {
        const data = await order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) {
            return res.send("User not found");
        }
        res.send(data);
    } catch (error) {
        return res.send(error);
    }
})

orderrouter.delete('/:id?',async (req,res)=>{
    if (!req.params.id) {
        return res.send("Please provide an ID");
    }
    try {
        const data = await order.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.send("User not found");
        }
        res.send({ message: "User deleted successfully", data });
    } catch (error) {
        return res.send(error);
    }
})
module.exports=orderrouter;