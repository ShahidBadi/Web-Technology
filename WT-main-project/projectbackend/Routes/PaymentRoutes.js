const express=require('express')
const payment=require('../models/payment')
const paymentrouter=express.Router();

paymentrouter.get('/',async (req,res)=>{
    const data=await payment.find();
    res.send(data)
})

paymentrouter.get('/:id',async (req,res)=>{
    const data=await payment.findById(req.params.id);
    res.send(data)
})

paymentrouter.post('/',async (req,res)=>{
    const data=await payment.create(req.body);
    res.send(data)
})

paymentrouter.patch('/:id',async (req,res)=>{
    const data=await payment.findByIdAndUpdate(req.params.id,req.body);
    res.send(data)
})

paymentrouter.delete('/:id',async (req,res)=>{
    const data=await payment.findByIdAndDelete(req.params.id);
    res.send(data)
})
module.exports=paymentrouter;