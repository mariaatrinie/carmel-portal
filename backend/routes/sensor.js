const router = require("express").Router();
const SensorData = require("../models/SensorData");

// POST from ESP32 / Postman
router.post("/", async (req,res)=>{
    try{
        const newData = new SensorData(req.body);
        await newData.save();
        res.json({msg:"Data saved"});
    }catch(err){
        res.status(500).json(err);
    }
});

// GET latest sensor data for dashboard
router.get("/latest", async (req,res)=>{
    try{
        const data = await SensorData.findOne().sort({createdAt:-1});
        res.json(data);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;
