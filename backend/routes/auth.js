const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");


// REGISTER
router.post("/register", async (req,res)=>{
    const {username,password} = req.body;

    try{

        let user = await User.findOne({username});
        if(user) return res.status(400).json({message:"User already exists"});

        const hash = await bcrypt.hash(password,10);

        user = new User({username,password:hash});
        await user.save();

        res.json({message:"Registration successful"});

    }catch(err){
        res.status(500).json({message:"Server error"});
    }
});


// LOGIN
router.post("/login", async (req,res)=>{
    const {username,password} = req.body;

    try{

        const user = await User.findOne({username});
        if(!user) return res.status(400).json({message:"User not found"});

        const match = await bcrypt.compare(password,user.password);
        if(!match) return res.status(400).json({message:"Incorrect password"});

        res.json({message:"Login successful"});

    }catch(err){
        res.status(500).json({message:"Server error"});
    }
});

module.exports = router;
