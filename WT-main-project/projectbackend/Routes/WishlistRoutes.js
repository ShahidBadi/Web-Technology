const express=require('express')
const wishlist=require('../models/wishlist')
const wishlistrouter=express.Router();

wishlistrouter.get('/',async (req,res)=>{
    const data=await wishlist.find();
    res.send(data)
})

wishlistrouter.get('/:id',async (req,res)=>{
    const data=await wishlist.findById(req.params.id);
    res.send(data)
})

wishlistrouter.post('/',async (req,res)=>{
    const data=await wishlist.create(req.body);
    res.send(data)
})

wishlistrouter.patch('/:id',async (req,res)=>{
    const data=await wishlist.findByIdAndUpdate(req.params.id,req.body);
    res.send(data)
})

wishlistrouter.delete('/:id',async (req,res)=>{
    const data=await wishlist.findByIdAndDelete(req.params.id);
    res.send(data)
})


module.exports=wishlistrouter;