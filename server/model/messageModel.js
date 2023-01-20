const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add your name"],
        },
        message: {
            type: String,
            required: [true, "Please add your message"],
        },
    },
    {
        timestamp: true,
    }
);

module.exports = mongoose.model("Messages", messageSchema);
