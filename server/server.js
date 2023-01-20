const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDb = require("./db");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
connectDb();

const logger = (req, res, next) => {
    console.log(
        `Request from ${req.protocol}://${req.get("host")}${req.originalUrl} ${
            req.method
        }`
    );
    next();
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logger);
app.use(cors());

app.use("/api/messages", require("./routes/messagesApi"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
