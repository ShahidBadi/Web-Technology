const express = require('express')
const user=require('../models/user')
const userrouter=express.Router();

userrouter.get('/',async (req,res)=>{
    try {
        const data = await user.find();
        res.send(data);
    } catch (error) {
        res.send(error);
    }
})

userrouter.get('/:id',async (req,res)=>{
    try {
        const data = await user.findById(req.params.id);
        if (!data) {
            return res.send("user not found");
        }
        res.send(data);
    } catch (error) {
        return res.send(error);
    }
})

userrouter.post('/', async (req, res) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.send("Please provide the required data");
    }
    try {
        const data = await user.create(req.body);
        res.send(data)
    } catch (error) {
        return res.send(error);
    }
});


userrouter.patch('/:id',async (req,res)=>{
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.send("Please provide data to update");
    }
    try {
        const data = await user.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) {
            return res.send("user not found");
        }
        res.send(data);
    } catch (error) {
        return res.send(error);
    }
})

userrouter.delete('/:id?',async (req,res)=>{
    
    console.log(req.params.id);
    if (!req.params.id) {
        return res.send("Please provide an ID");
    }
    
    try {
        const data = await user.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.send("user not found");
        }
        res.send(data);
    } catch (error) {
        return res.send(error);
    }
    
})
module.exports=userrouter;