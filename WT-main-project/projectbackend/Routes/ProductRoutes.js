const express=require('express')
const product=require('../models/product')
const productrouter=express.Router();

productrouter.get('/',async (req,res)=>{
    const data=await product.find();
    res.send(data)
})

productrouter.get('/:id',async (req,res)=>{
    const data=await product.findById(req.params.id);
    res.send(data)
})

productrouter.post('/',async (req,res)=>{
    const data=await product.create(req.body);
    res.send(data)
})

productrouter.patch('/:id',async (req,res)=>{
    const data=await product.findByIdAndUpdate(req.params.id,req.body);
    res.send(data)
})

productrouter.delete('/:id',async (req,res)=>{
    const data=await product.findByIdAndDelete(req.params.id);
    res.send(data)
})
module.exports=productrouter;