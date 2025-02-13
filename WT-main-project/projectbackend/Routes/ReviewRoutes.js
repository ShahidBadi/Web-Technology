const express=require('express')
const review=require('../models/review')
const reviewrouter=express.Router();

reviewrouter.get('/',async (req,res)=>{
    const data=await review.find();
    res.send(data)
})

reviewrouter.get('/:id',async (req,res)=>{
    const data=await review.findById(req.params.id);
    res.send(data)
})

reviewrouter.post('/',async (req,res)=>{
    const data=await review.create(req.body);
    res.send(data)
})

reviewrouter.patch('/:id',async (req,res)=>{
    const data=await review.findByIdAndUpdate(req.params.id,req.body);
    res.send(data)
})

reviewrouter.delete('/:id',async (req,res)=>{
    const data=await review.findByIdAndDelete(req.params.id);
    res.send(data)
})
module.exports=reviewrouter;