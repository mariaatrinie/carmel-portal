const express = require("express");
const Settings = require("../models/Settings");

const router = express.Router();

router.get("/", async (req, res) => {
    const settings = await Settings.findOne();
    res.json(settings);
});

module.exports = router;
