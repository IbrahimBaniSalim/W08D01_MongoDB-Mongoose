const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    task: { type: String, required: true, unique: true },
    description: { type: String, required: true, unique: true },
    deadline: { type: Date, required: true },
    isCompleted: { type: Boolean },
    priority: { type: String }
});

module.exports = mongoose.model("User", userSchema);