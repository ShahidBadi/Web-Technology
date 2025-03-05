const express=require('express')
const categories=require('../models/categories')
const categoriesrouter=express.Router();

categoriesrouter.get('/',async (req,res)=>{
    try {
        const data = await categories.find();
        res.send(data);
    } catch (error) {
        res.send(error);
    }
})

categoriesrouter.get('/:id',async (req,res)=>{
    try {
        const data = await categories.findById(req.params.id);
        if (!data) {
            return res.send("User not found");
        }
        res.send(data);
    } catch (error) {
        return res.send(error);
    }
})

categoriesrouter.post('/',async (req,res)=>{
   if (!req.body || Object.keys(req.body).length === 0) {
          return res.send("Please provide the required data");
      }
      try {
          const data = await categories.create(req.body);
          res.send(data)
      } catch (error) {
          return res.send(error);
      }
})

categoriesrouter.patch('/:id',async (req,res)=>{
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.send("Please provide data to update");
    }
    try {
        const data = await categories.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) {
            return res.send("User not found");
        }
        res.send(data);
    } catch (error) {
        return res.send(error);
    }
})

categoriesrouter.delete('/:id?',async (req,res)=>{
    if (!req.params.id) {
        return res.send("Please provide an ID");
    }
    try {
        const data = await categories.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.send("User not found");
        }
        res.send({ message: "User deleted successfully", data });
    } catch (error) {
        return res.send(error);
    }
})
module.exports=categoriesrouter;