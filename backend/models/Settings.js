const mongoose = require("mongoose");

const SettingsSchema = new mongoose.Schema({
    ventilation: Boolean,
    gasLevel: Number,
    theme: String,
    notifications: Boolean
});

module.exports = mongoose.model("Settings", SettingsSchema);
