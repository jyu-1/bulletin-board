const express = require("express");
const router = express.Router();
const { getMessage, postMessage } = require("../controllers/messageController");

router.route("/").get(getMessage).post(postMessage);

module.exports = router;
