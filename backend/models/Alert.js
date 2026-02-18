const mongoose = require("mongoose");

const AlertSchema = new mongoose.Schema({
    message: String,
    level: String,
    active: Boolean,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Alert", AlertSchema);
