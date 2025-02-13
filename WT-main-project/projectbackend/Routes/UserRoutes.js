const express=require('express')
const user=require('../models/user')
const userrouter=express.Router();

userrouter.get('/',async (req,res)=>{
    const data=await user.find();
    res.send(data)
})

userrouter.get('/:id',async (req,res)=>{
    const data=await user.findById(req.params.id);
    res.send(data)
})

userrouter.post('/',async (req,res)=>{
    const data=await user.create(req.body);
    res.send(data)
})

userrouter.patch('/:id',async (req,res)=>{
    const data=await user.findByIdAndUpdate(req.params.id,req.body);
    res.send(data)
})

userrouter.delete('/:id',async (req,res)=>{
    const data=await user.findByIdAndDelete(req.params.id);
    res.send(data)
})
module.exports=userrouter;