const express = require("express");
const SensorData = require("../models/SensorData");

const router = express.Router();

router.get("/", async (req, res) => {
    const latest = await SensorData.findOne().sort({ createdAt: -1 });
    res.json(latest);
});

module.exports = router;
