const express=require('express')
const payment=require('../models/payment')
const paymentrouter=express.Router();

paymentrouter.get('/',async (req,res)=>{
    try {
        const data = await payment.find();
        res.send(data);
    } catch (error) {
        res.send(error);
    }
})

paymentrouter.get('/:id',async (req,res)=>{
    try {
        const data = await payment.findById(req.params.id);
        if (!data) {
            return res.send("User not found");
        }
        res.send(data);
    } catch (error) {
        return res.send(error);
    }
})

paymentrouter.post('/',async (req,res)=>{
    if (!req.body || Object.keys(req.body).length === 0) {
            return res.send("Please provide the required data");
        }
        try {
            const data = await payment.create(req.body);
            res.send(data)
        } catch (error) {
            return res.send(error);
        }
})

paymentrouter.patch('/:id',async (req,res)=>{
   if (!req.body || Object.keys(req.body).length === 0) {
           return res.send("Please provide the required data");
       }
       try {
           const data = await payment.create(req.body);
           res.send(data)
       } catch (error) {
           return res.send(error);
       }
})

paymentrouter.delete('/:id?',async (req,res)=>{
    if (!req.params.id) {
        return res.send("Please provide an ID");
    }
    try {
        const data = await payment.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.send("User not found");
        }
        res.send({ message: "User deleted successfully", data });
    } catch (error) {
        return res.send(error);
    }
})
module.exports=paymentrouter;