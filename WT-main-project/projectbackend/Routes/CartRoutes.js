const express=require('express')
const cart=require('../models/cart')
const cartrouter=express.Router();

cartrouter.get('/',async (req,res)=>{
    const data=await cart.find();
    res.send(data)
})

cartrouter.get('/:id',async (req,res)=>{
    const data=await cart.findById(req.params.id);
    res.send(data)
})

cartrouter.post('/',async (req,res)=>{
    const data=await cart.create(req.body);
    res.send(data)
})

cartrouter.patch('/:id',async (req,res)=>{
    const data=await cart.findByIdAndUpdate(req.params.id,req.body);
    res.send(data)
})

cartrouter.delete('/:id',async (req,res)=>{
    const data=await cart.findByIdAndDelete(req.params.id);
    res.send(data)
})
module.exports=cartrouter;