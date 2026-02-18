const mongoose = require("mongoose");

const SensorSchema = new mongoose.Schema({
    temperature:Number,
    humidity:Number,
    airQuality:Number,
    soil:Number,
    sound:Number,
    gas:Number,
    co:Number,
    alcohol:Number,
    rain:Boolean
},{
    timestamps:true   // ⭐ THIS LINE FIXES YOUR ERROR
});

module.exports = mongoose.model("SensorData", SensorSchema);
