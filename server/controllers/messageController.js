const Message = require("../model/messageModel");

const getMessage = async (req, res) => {
    const messages = await Message.find();

    res.status(200).json(messages);
};

const postMessage = async (req, res) => {
    if (!req.body.name || !req.body.message) {
        res.status(400);
        throw new Error("Please include both the name and message");
    }

    const messages = await Message.create({
        name: req.body.name,
        message: req.body.message,
    });

    res.status(200).json(messages);
};

module.exports = {
    getMessage,
    postMessage,
};
