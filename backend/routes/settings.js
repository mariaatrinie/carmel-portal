const express = require("express");
const Settings = require("../models/Settings");

const router = express.Router();

router.post("/", async (req, res) => {
    const updated = await Settings.findOneAndUpdate({}, req.body, { new: true });
    res.json(updated);
});

module.exports = router;
