const getMessage = (req, res) => {
    res.status(200).json({ message: "accepted" });
};

const postMessage = (req, res) => {
    if (!req.body.name || !req.body.message) {
        res.status(400);
        throw new Error("Please include both the name and message");
    }

    res.status(200).json({ name: req.body.name, message: req.body.message });
};

module.exports = {
    getMessage,
    postMessage,
};
