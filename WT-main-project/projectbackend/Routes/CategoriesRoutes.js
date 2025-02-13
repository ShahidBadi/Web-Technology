const express=require('express')
const categories=require('../models/categories')
const categoriesrouter=express.Router();

categoriesrouter.get('/',async (req,res)=>{
    const data=await categories.find();
    res.send(data)
})

categoriesrouter.get('/:id',async (req,res)=>{
    const data=await categories.findById(req.params.id);
    res.send(data)
})

categoriesrouter.post('/',async (req,res)=>{
    const data=await categories.create(req.body);
    res.send(data)
})

categoriesrouter.patch('/:id',async (req,res)=>{
    const data=await categories.findByIdAndUpdate(req.params.id,req.body);
    res.send(data)
})

categoriesrouter.delete('/:id',async (req,res)=>{
    const data=await categories.findByIdAndDelete(req.params.id);
    res.send(data)
})
module.exports=categoriesrouter;