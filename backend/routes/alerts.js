const express = require("express");
const Alert = require("../models/Alert");

const router = express.Router();

router.get("/", async (req, res) => {
    const alerts = await Alert.find({ active: true });
    res.json(alerts);
});

module.exports = router;
