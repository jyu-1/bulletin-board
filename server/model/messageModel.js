const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a name"],
            minLength: [1, "Please enter a name"],
            maxLength: [20, "Your name is too long"],
        },
        message: {
            type: String,
            required: [true, "Please enter a message"],
            minLength: [1, "Please enter a message"],
            maxLength: [300, "Your message is too long"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Messages", messageSchema);
