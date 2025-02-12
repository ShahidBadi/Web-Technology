const express=require('express')
const user=require('../models/user')
const router=express.Router();

router.get('/',async (req,res)=>{
    const data=await user.find();
    res.send(data)
})

router.get('/:id',async (req,res)=>{
    const data=await user.findById(req.params.id);
    res.send(data)
})

router.post('/',async (req,res)=>{
    const data=await user.create(req.body);
    res.send(data)
})

router.patch('/:id',async (req,res)=>{
    const data=await user.findByIdAndUpdate(req.params.id,req.body);
    res.send(data)
})

router.delete('/:id',async (req,res)=>{
    const data=await user.findByIdAndDelete(req.params.id);
    res.send(data)
})
module.exports=router;