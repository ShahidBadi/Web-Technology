const express=require('express')
const order=require('../models/order')
const orderrouter=express.Router();

orderrouter.get('/',async (req,res)=>{
    const data=await order.find();
    res.send(data)
})

orderrouter.get('/:id',async (req,res)=>{
    const data=await order.findById(req.params.id);
    res.send(data)
})

orderrouter.post('/',async (req,res)=>{
    const data=await order.create(req.body);
    res.send(data)
})

orderrouter.patch('/:id',async (req,res)=>{
    const data=await order.findByIdAndUpdate(req.params.id,req.body);
    res.send(data)
})

orderrouter.delete('/:id',async (req,res)=>{
    const data=await order.findByIdAndDelete(req.params.id);
    res.send(data)
})
module.exports=orderrouter;