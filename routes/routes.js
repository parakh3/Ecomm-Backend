const express = require('express');
const Model = require('../models/model');
const router = express.Router();
  
//Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById({_id:req.params.id});
        // const data=await <M
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Post Method
router.post('/post', async (req, res) => {  
    const data = new Model({
        title: req.body.title,
        description: req.body.description
    })   
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
    



module.exports = router;