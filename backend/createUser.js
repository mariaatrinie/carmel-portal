const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

mongoose.connect("mongodb://127.0.0.1:27017/carmel_smartsense");

const User = require("./models/User");

async function createUser() {
    const hashed = await bcrypt.hash("1234", 10);

    const user = new User({
        username: "admin",
        password: hashed
    });

    await user.save();
    console.log("Admin user created successfully!");
    process.exit();
}

createUser();
