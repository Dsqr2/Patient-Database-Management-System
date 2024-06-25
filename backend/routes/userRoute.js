const express = require("express");
const mongoose = require("mongoose");
const userData = require("../models/userModel");
const router = express.Router();

// Create
router.post("/", async (req,res) => {
    const {name,email,age} = req.body;
    try
    {
        const userAdded = await userData.create({
            name: name, 
            email: email,
            age: age
        });

        res.status(201).json(userAdded);
    }

    catch (error) 
    {
        console.log(error);
        res.status(400).json({error: error.message});
    }
    
});

// Read 
router.get("/", async(req,res) => {
    try
    {
        const allUsers = await userData.find();
        res.status(200).json(allUsers);
    }

    catch (error) 
    {
        console.log(error);
        res.status(500).json({error: error.message});
    }
    
    // res.send("API Running");
});

// Get Single User
router.get("/:id", async(req,res) => {
    const {id} = req.params;
    try {
        const singleUser = await userData.findById({_id: id });
        res.status(200).json(singleUser);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    
    // res.send("API Running");
});

// Delete
router.delete("/:id", async(req,res) => {
    const { id } = req.params;
    try
    {
        const deletedUser = await userData.findByIdAndDelete({ _id: id });
        res.status(200).json(deletedUser);
    }

    catch (error) 
    {
        console.log(error);
        res.status(500).json({error: error.message});
    }
    
});


// Put / Patch

router.patch("/:id", async(req,res) => {
    const {id} = req.params;
    const {name, email, age} = req.body;
    try
    {
        const updateUser = await userData.findByIdAndUpdate(id, req.body, {
            new: true
        });
        res.status(200).json(updateUser);
    }

    catch (error) 
    {
        console.log(error);
        res.status(500).json({error: error.message});
    }
    
    // res.send("API Running");
});
module.exports = router;