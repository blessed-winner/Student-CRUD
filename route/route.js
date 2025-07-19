const express = require('express');
const Student = require('../model/student.model');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Welcome to our system');
})
router.post('/insert',async(req,res)=>{
     const student = await Student.create(req.body);
     try{
        res.status(200).json(student);
     }
     catch(e){
        res.status(500).json({Error:e.message})
     }
})

router.get('/students',async(req,res)=>{
    const student = await Student.find();
    try{
        res.status(200).json(student);
    }
    catch(e){
        res.status(500).json({Error:e.message})
     }
})

router.get('/students/:id',async(req,res)=>{
    const student = await Student.findById(req.params.id);
       try{
        res.status(200).json(student);
    }
    catch(e){
        res.status(500).json({Error:e.message})
     }
})

router.put('/students/:id',async(req,res)=>{
    const student = await Student.findByIdAndUpdate(req.params.id,req.body);
    const updatedStudent = await Student.findById(req.params.id);
       try{
        res.status(200).json(updatedStudent);
    }
    catch(e){
        res.status(500).json({Error:e.message})
     }
})

router.delete('/students/:id',async(req,res)=>{
    const student = await Student.findByIdAndDelete(req.params.id);
    try{
        res.status(200).json('Student deleted successfully')
    }
      catch(e){
        res.status(500).json({Error:e.message})
     }
})
module.exports = router